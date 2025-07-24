import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContent, updateContentText, getAllContents } from '../../../../services/apiService';
import toast from '../../../../services/toastService';
import TinyMCEEditor from '../../../../components/TextEditor/TinyMCEEditor';
import ContentFileUpload from './ContentFileUpload';
import axios from 'axios';

const getToken = () => localStorage.getItem('token');
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const fetchCategories = async () => {
  const token = getToken();
  const res = await axios.get(`${apiBaseUrl}/categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data || [];
};

const fetchUsers = async () => {
  const token = getToken();
  const res = await axios.get(`${apiBaseUrl}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data || [];
};

const fetchAllContents = async () => {
  const token = getToken();
  const res = await axios.get(`${apiBaseUrl}/v1/content`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data || [];
};

const initialState = {
  title: '',
  type: '',
  contentBody: '',
  parent: '',
  categories: [],
  accessLevel: 'free',
  author: '',
  tags: [],
  visibility: 'public',
  isDownloadable: false,
  isCopyable: false,
  images: [],
  pdfFiles: [],
  docFiles: [],
  htmlFiles: [],
};

const ContentForm = ({ content, onClose, modalWidth = "max-w-6xl" }) => {
  // --- State ---
  const [form, setForm] = useState(initialState);
  const [imageFiles, setImageFiles] = useState([]); // new uploads only
  const [pdfFiles, setPdfFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);
  const [htmlFiles, setHtmlFiles] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [removedImages, setRemovedImages] = useState([]);
  const [removedPdfFiles, setRemovedPdfFiles] = useState([]);
  const [removedDocFiles, setRemovedDocFiles] = useState([]);
  const [removedHtmlFiles, setRemovedHtmlFiles] = useState([]);
  const queryClient = useQueryClient();

  // --- Effect: Initialize form with all existing values ---
  useEffect(() => {
    if (content) {
      setForm({
        ...initialState,
        ...content,
        author: typeof content.author === 'object' && content.author?._id ? content.author._id : content.author || '',
        categories: content.categories?.map(c => c._id || c) || [],
        tags: content.tags || [],
        images: content.images || [],
        pdfFiles: content.pdfFiles || [],
        docFiles: content.docFiles || [],
        htmlFiles: content.htmlFiles || [],
      });
      setImageFiles([]);
      setPdfFiles([]);
      setDocFiles([]);
      setHtmlFiles([]);
      setRemovedImages([]);
      setRemovedPdfFiles([]);
      setRemovedDocFiles([]);
      setRemovedHtmlFiles([]);
    } else {
      setForm(initialState);
      setImageFiles([]);
      setPdfFiles([]);
      setDocFiles([]);
      setHtmlFiles([]);
      setRemovedImages([]);
      setRemovedPdfFiles([]);
      setRemovedDocFiles([]);
      setRemovedHtmlFiles([]);
    }
  }, [content]);

  // --- File change: add new files, merge with existing in form state ---
  const handleFileChange = (type, files) => {
    setForm(prev => ({
      ...prev,
      [type]: [
        // keep existing (object with _id)
        ...(prev[type]?.filter(f => typeof f === 'object' && f._id)),
        // add new (File/Blob)
        ...Array.from(files)
      ]
    }));
  };

  // --- Remove existing file: add to remove list, remove from form state ---
  const handleRemoveExistingFile = (type, fileId) => {
    setForm(prev => ({
      ...prev,
      [type]: prev[type].filter(f => (f._id ? f._id !== fileId : true))
    }));
    if (type === 'images') setRemovedImages(prev => [...prev, fileId]);
    if (type === 'pdfFiles') setRemovedPdfFiles(prev => [...prev, fileId]);
    if (type === 'docFiles') setRemovedDocFiles(prev => [...prev, fileId]);
    if (type === 'htmlFiles') setRemovedHtmlFiles(prev => [...prev, fileId]);
  };

  // --- Remove new file (not yet uploaded): remove from form state only ---
  const handleRemoveNewFile = (type, fileIdx) => {
    setForm(prev => ({
      ...prev,
      [type]: prev[type].filter((f, i) => !(i === fileIdx && !f._id))
    }));
  };

  // --- Submit: always send all current (not removed) + new files ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!form.title || !form.type || !form.author || !form.categories.length) {
        toast.showError('Title, Type, Author, and at least one Category are required');
        setLoading(false);
        return;
      }
      const formData = new FormData();
      // All non-file fields
      Object.entries(form).forEach(([key, value]) => {
        if (["images", "pdfFiles", "docFiles", "htmlFiles"].includes(key)) return;
        if (key === 'categories') value.forEach((v) => formData.append('categories', v));
        else if (key === 'tags') value.forEach((v) => formData.append('tags', v));
        else if (key === 'parent' && value) formData.append('parent', value);
        else formData.append(key, value);
      });
      // Existing files (not removed)
      form.images?.forEach(img => { if (img._id && !removedImages.includes(img._id)) formData.append('existingImages', img._id); });
      form.pdfFiles?.forEach(pdf => { if (pdf._id && !removedPdfFiles.includes(pdf._id)) formData.append('existingPdfFiles', pdf._id); });
      form.docFiles?.forEach(doc => { if (doc._id && !removedDocFiles.includes(doc._id)) formData.append('existingDocFiles', doc._id); });
      form.htmlFiles?.forEach(html => { if (html._id && !removedHtmlFiles.includes(html._id)) formData.append('existingHtmlFiles', html._id); });
      // New files (File/Blob only)
      form.images?.forEach(img => { if (!img._id) formData.append('images', img); });
      form.pdfFiles?.forEach(pdf => { if (!pdf._id) formData.append('pdfFiles', pdf); });
      form.docFiles?.forEach(doc => { if (!doc._id) formData.append('docFiles', doc); });
      form.htmlFiles?.forEach(html => { if (!html._id) formData.append('htmlFiles', html); });
      // Removed file IDs
      removedImages.forEach(id => formData.append('removedImages', id));
      removedPdfFiles.forEach(id => formData.append('removedPdfFiles', id));
      removedDocFiles.forEach(id => formData.append('removedDocFiles', id));
      removedHtmlFiles.forEach(id => formData.append('removedHtmlFiles', id));
      if (content && content._id) updateMutation.mutate({ id: content._id, formData });
      else createMutation.mutate(formData);
    } finally {
      setLoading(false);
    }
  };

  // Mutations
  const createMutation = useMutation({
    mutationFn: (formData) => createContent(formData),
    onSuccess: () => {
      toast.showSuccess('Content created successfully');
      queryClient.invalidateQueries(['contents']);
      onClose();
    },
    onError: () => toast.showError('Failed to create content'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, formData }) => updateContentText(id, formData),
    onSuccess: () => {
      toast.showSuccess('Content updated successfully');
      queryClient.invalidateQueries(['contents']);
      onClose();
    },
    onError: () => toast.showError('Failed to update content'),
  });

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleEditorChange = (contentBody) => {
    setForm((prev) => ({ ...prev, contentBody }));
  };

  // Tags
  const handleAddTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput('');
    }
  };
  const handleRemoveTag = (idx) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((_, i) => i !== idx) }));
  };

  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setForm((prev) => ({ ...prev, categories: selected }));
  };

  // Queries
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: allContents } = useQuery({
    queryKey: ['contents'],
    queryFn: fetchAllContents,
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div
        className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full ${modalWidth} max-w-[90vw] relative flex flex-col`}
        style={{ color: 'var(--color-text)', background: 'var(--color-bg-card)', padding: 'var(--standard-padding)', maxHeight: '95vh', minWidth: 'min(90vw,1200px)' }}
      >
        <button className="absolute top-2 right-2 btn btn-sm btn-error" onClick={onClose} style={{ zIndex: 10 }}>X</button>
        <h2 className="text-xl font-bold mb-4">{content ? 'Edit Content' : 'Add Content'}</h2>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-bold text-lg mb-1">Title</label>
              <input name="title" value={form.title} onChange={handleChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition" required />
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Type</label>
              <select name="type" value={form.type} onChange={handleChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition" required>
                <option value="">Select type</option>
                <option value="Dashboard">Dashboard</option>
                <option value="Home">Home</option>
                <option value="Vocabulary">Vocabulary</option>
                <option value="Grammar">Grammar</option>
                <option value="Writing">Writing</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Courses">Courses</option>
                <option value="Study Materials">Study Materials</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Content Body</label>
              <TinyMCEEditor value={form.contentBody} onEditorChange={handleEditorChange} />
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Author</label>
              <select name="author" value={form.author} onChange={handleChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition" required>
                <option value="">Select Author</option>
                {users?.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name || user.email}
                    {user.email ? ` (${user.email})` : ''}
                    {user.role === 'admin' ? ' (Admin)' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Categories</label>
              <select name="categories" value={form.categories} onChange={handleCategoryChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition" multiple required>
                {categories?.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Parent Content (optional)</label>
              <select name="parent" value={form.parent} onChange={handleChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition">
                <option value="">None</option>
                {allContents?.filter(c => !content || c._id !== content._id).map((c) => (
                  <option key={c._id} value={c._id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition"
                  placeholder="Add tag"
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); } }}
                />
                <button type="button" className="btn btn-secondary" onClick={handleAddTag}>Add</button>
              </div>
              <ul className="flex flex-wrap gap-2">
                {form.tags.map((tag, i) => (
                  <li key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1">
                    {tag}
                    <button type="button" className="text-red-500 text-xs ml-1" onClick={() => handleRemoveTag(i)}>x</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Access Level</label>
              <select
                name="accessLevel"
                value={form.accessLevel}
                onChange={handleChange}
                className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition"
                style={{ minHeight: '2.5rem' }}
              >
                <option value="" disabled className="font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 border-b-2 border-blue-400">Select Access Level</option>
                <option value="free" className="font-bold text-green-700 dark:text-green-300">Free</option>
                <option value="student" className="font-bold text-purple-700 dark:text-purple-300">Student</option>
                <option value="special-student" className="font-bold text-pink-700 dark:text-pink-300">Special Student</option>
                <option value="teacher" className="font-bold text-yellow-700 dark:text-yellow-300">Teacher</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">Visibility</label>
              <select name="visibility" value={form.visibility} onChange={handleChange} className="input w-full border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label className="flex items-center">
                <input type="checkbox" name="isDownloadable" checked={form.isDownloadable} onChange={handleChange} className="input input-bordered w-4 h-4" /> Downloadable
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="isCopyable" checked={form.isCopyable} onChange={handleChange} className="input input-bordered w-4 h-4" /> Copyable
              </label>
            </div>
            {/* File Previews for Edit Mode */}
            {content && (
              <>
                {/* Images Preview */}
                {content.images && content.images.length > 0 && (
                  <div>
                    <label className="block font-bold text-lg mb-1">Existing Images</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {content.images.filter(img => !removedImages.includes(img._id)).map(img => (
                        <div key={img._id} className="relative group">
                          <img src={img.url} alt={img.altText} className="w-24 h-24 object-cover rounded shadow border dark:border-gray-700" />
                          <button type="button" className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs opacity-80 group-hover:opacity-100" onClick={() => handleRemoveExistingFile('images', img._id)}>x</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* PDF Preview */}
                {content.pdfFiles && content.pdfFiles.length > 0 && (
                  <div>
                    <label className="block font-bold text-lg mb-1">Existing PDF Files</label>
                    <ul className="mb-2">
                      {content.pdfFiles.filter(pdf => !removedPdfFiles.includes(pdf._id)).map(pdf => (
                        <li key={pdf._id} className="flex items-center gap-2">
                          <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">{pdf.title || pdf.url}</a>
                          <button type="button" className="bg-red-600 text-white rounded-full p-1 text-xs" onClick={() => handleRemoveExistingFile('pdfFiles', pdf._id)}>x</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* DOC Preview */}
                {content.docFiles && content.docFiles.length > 0 && (
                  <div>
                    <label className="block font-bold text-lg mb-1">Existing DOCX Files</label>
                    <ul className="mb-2">
                      {content.docFiles.filter(doc => !removedDocFiles.includes(doc._id)).map(doc => (
                        <li key={doc._id} className="flex items-center gap-2">
                          <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">{doc.title || doc.url}</a>
                          <button type="button" className="bg-red-600 text-white rounded-full p-1 text-xs" onClick={() => handleRemoveExistingFile('docFiles', doc._id)}>x</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* HTML Preview */}
                {content.htmlFiles && content.htmlFiles.length > 0 && (
                  <div>
                    <label className="block font-bold text-lg mb-1">Existing HTML Files</label>
                    <ul className="mb-2">
                      {content.htmlFiles.filter(html => !removedHtmlFiles.includes(html._id)).map(html => (
                        <li key={html._id} className="flex items-center gap-2">
                          <a href={html.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">{html.title || html.url}</a>
                          <button type="button" className="bg-red-600 text-white rounded-full p-1 text-xs" onClick={() => handleRemoveExistingFile('htmlFiles', html._id)}>x</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            {/* File Uploads */}
            <div>
              <label className="block font-bold text-lg mb-1">Images</label>
              <ContentFileUpload files={imageFiles} onChange={files => handleFileChange('images', files)} type="images" />
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">PDF Files</label>
              <ContentFileUpload files={pdfFiles} onChange={files => handleFileChange('pdfFiles', files)} type="pdfFiles" />
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">DOCX Files</label>
              <ContentFileUpload files={docFiles} onChange={files => handleFileChange('docFiles', files)} type="docFiles" />
            </div>
            <div>
              <label className="block font-bold text-lg mb-1">HTML Files</label>
              <ContentFileUpload files={htmlFiles} onChange={files => handleFileChange('htmlFiles', files)} type="htmlFiles" />
            </div>
            <div className="flex gap-2 mt-4">
              <button type="submit" className="btn btn-primary" disabled={loading || createMutation.isLoading || updateMutation.isLoading}>
                {(loading || createMutation.isLoading || updateMutation.isLoading) ? 'Saving...' : (content ? 'Update' : 'Create')}
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentForm;
