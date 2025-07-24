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

const ContentForm = ({ content, onClose, modalWidth = "max-w-4xl" }) => {
  const [form, setForm] = useState(initialState);
  const [imageFiles, setImageFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);
  const [htmlFiles, setHtmlFiles] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  // Fetch categories
  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  // Fetch users (authors)
  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  // Fetch all contents for parent select
  const { data: allContents = [], isLoading: contentsLoading } = useQuery({
    queryKey: ['allContents'],
    queryFn: fetchAllContents,
  });

  useEffect(() => {
    if (content) {
      setForm({ ...initialState, ...content, categories: content.categories?.map(c => c._id || c) || [] });
    } else {
      setForm(initialState);
    }
  }, [content]);

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

  const handleFileChange = (type, files) => {
    if (type === 'images') setImageFiles(files);
    if (type === 'pdfFiles') setPdfFiles(files);
    if (type === 'docFiles') setDocFiles(files);
    if (type === 'htmlFiles') setHtmlFiles(files);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Validation
      if (!form.title || !form.type || !form.author || !form.categories.length) {
        toast.showError('Title, Type, Author, and at least one Category are required');
        setLoading(false);
        return;
      }
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (["images", "pdfFiles", "docFiles", "htmlFiles"].includes(key)) {
          // Skip file fields here, they are handled separately
          return;
        }
        if (key === 'categories') {
          value.forEach((v) => formData.append('categories', v));
        } else if (key === 'tags') {
          value.forEach((v) => formData.append('tags', v));
        } else if (key === 'parent' && value) {
          formData.append('parent', value);
        } else {
          formData.append(key, value);
        }
      });
      // Only append files if they exist
      imageFiles.forEach((file) => {
        if (file) formData.append('images', file);
      });
      pdfFiles.forEach((file) => {
        if (file) formData.append('pdfFiles', file);
      });
      docFiles.forEach((file) => {
        if (file) formData.append('docFiles', file);
      });
      htmlFiles.forEach((file) => {
        if (file) formData.append('htmlFiles', file);
      });
      // Debug: log all FormData entries
      for (let pair of formData.entries()) {
        console.log('[ContentForm] FormData:', pair[0], pair[1]);
      }
      if (content && content._id) {
        console.log("[ContentForm] Updating content with ID:", content._id, "Data (FormData):", formData);
        updateMutation.mutate({ id: content._id, formData });
      } else {
        console.log("[ContentForm] Creating new content. Data (FormData):", formData);
        createMutation.mutate(formData);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div
        className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full ${modalWidth} relative flex flex-col`}
        style={{ color: 'var(--color-text)', background: 'var(--color-bg-card)', padding: 'var(--standard-padding)', maxHeight: '90vh' }}
      >
        <button className="absolute top-2 right-2 btn btn-sm btn-error" onClick={onClose} style={{ zIndex: 10 }}>X</button>
        <h2 className="text-xl font-bold mb-4">{content ? 'Edit Content' : 'Add Content'}</h2>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Title</label>
              <input name="title" value={form.title} onChange={handleChange} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="block font-medium">Type</label>
              <select name="type" value={form.type} onChange={handleChange} className="input input-bordered w-full" required>
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
              <label className="block font-medium">Content Body</label>
              <TinyMCEEditor value={form.contentBody} onEditorChange={handleEditorChange} />
            </div>
            <div>
              <label className="block font-medium">Author</label>
              <select name="author" value={form.author} onChange={handleChange} className="input input-bordered w-full" required>
                <option value="">Select Author</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>{user.name || user.email}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium">Categories</label>
              <select name="categories" value={form.categories} onChange={handleCategoryChange} className="input input-bordered w-full" multiple required>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium">Parent Content (optional)</label>
              <select name="parent" value={form.parent} onChange={handleChange} className="input input-bordered w-full">
                <option value="">None</option>
                {allContents.filter(c => !content || c._id !== content._id).map((c) => (
                  <option key={c._id} value={c._id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium">Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  className="input input-bordered w-full"
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
              <label className="block font-medium">Access Level</label>
              <select name="accessLevel" value={form.accessLevel} onChange={handleChange} className="input input-bordered w-full">
                <option value="free">Free</option>
                <option value="student">Student</option>
                <option value="special-student">Special Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Visibility</label>
              <select name="visibility" value={form.visibility} onChange={handleChange} className="input input-bordered w-full">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label className="flex items-center">
                <input type="checkbox" name="isDownloadable" checked={form.isDownloadable} onChange={handleChange} /> Downloadable
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="isCopyable" checked={form.isCopyable} onChange={handleChange} /> Copyable
              </label>
            </div>
            {/* File Uploads */}
            <div>
              <label className="block font-medium">Images</label>
              <ContentFileUpload files={imageFiles} onChange={files => handleFileChange('images', files)} type="images" />
            </div>
            <div>
              <label className="block font-medium">PDF Files</label>
              <ContentFileUpload files={pdfFiles} onChange={files => handleFileChange('pdfFiles', files)} type="pdfFiles" />
            </div>
            <div>
              <label className="block font-medium">DOCX Files</label>
              <ContentFileUpload files={docFiles} onChange={files => handleFileChange('docFiles', files)} type="docFiles" />
            </div>
            <div>
              <label className="block font-medium">HTML Files</label>
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
