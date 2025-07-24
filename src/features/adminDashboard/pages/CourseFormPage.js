import React, { useState, useEffect } from 'react';
import TextEditor from '../../../components/TextEditor';
import { createCourse, updateCourse } from '../services/courseService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { DEV_TEST_API_BASE_URL } from '../../../api/serverApiForTestingInLocalhost';

const initialState = {
  title: '',
  slug: '',
  description: '',
  thumbnail: '',
  images: [],
  instructor: '',
  level: 'beginner',
  category: '',
  duration: '4 weeks',
  requirements: [],
  learningOutcomes: [],
  price: 0,
  status: 'draft',
};
const apiBaseUrl = DEV_TEST_API_BASE_URL;
const getToken = () => localStorage.getItem('token');

const fetchCategories = async () => {
  const token = getToken();
  const res = await axios.get(`${apiBaseUrl}/categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data || [];
};

const fetchInstructors = async () => {
  const token = getToken();
  const res = await axios.get(`${apiBaseUrl}/users?role=teacher`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data || [];
};

const uploadImages = async (files) => {
  const token = getToken();
  const formData = new FormData();
  for (let file of files) {
    formData.append('images', file);
  }
  const res = await axios.post(`${apiBaseUrl}/v1/uploads/course-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  
  console.log('Backend response:', res.data);
  
  // Handle the response structure properly
  // if (res.data.success && res.data.data) {
  //   // Map the backend response to the expected format
  //   const formattedImages = res.data.data.map(img => ({
  //     url: img.fileUrl,
  //     publicId: img.publicId
  //   }));
  //   console.log('Formatted images:', formattedImages);
  //   return formattedImages;
  // } else {
  //   throw new Error('Upload failed or invalid response structure');
  // }
};

const CourseFormPage = ({ course, onSuccess, onCancel }) => {
  const [form, setForm] = useState(initialState);
  const [requirementInput, setRequirementInput] = useState('');
  const [outcomeInput, setOutcomeInput] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (course) setForm({ ...initialState, ...course });
    else setForm(initialState);
  }, [course]);

  // Fetch categories
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Fetch instructors
  const {
    data: instructors = [],
    isLoading: instructorsLoading,
    isError: instructorsError,
  } = useQuery({
    queryKey: ['instructors'],
    queryFn: fetchInstructors,
  });

  // Mutations for create/update
  const createMutation = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
      onSuccess();
    },
    onError: () => setError('Failed to create course'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updateCourse(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
      onSuccess();
    },
    onError: () => setError('Failed to update course'),
  });

  // Mutation for image upload
  const imageUploadMutation = useMutation({
    mutationFn: uploadImages,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setForm((prev) => ({ ...prev, description: content }));
  };

  const handleAddRequirement = () => {
    if (requirementInput.trim()) {
      setForm((prev) => ({ ...prev, requirements: [...(prev.requirements || []), requirementInput.trim()] }));
      setRequirementInput('');
    }
  };

  const handleRemoveRequirement = (idx) => {
    setForm((prev) => ({ ...prev, requirements: prev.requirements.filter((_, i) => i !== idx) }));
  };

  const handleAddOutcome = () => {
    if (outcomeInput.trim()) {
      setForm((prev) => ({ ...prev, learningOutcomes: [...(prev.learningOutcomes || []), outcomeInput.trim()] }));
      setOutcomeInput('');
    }
  };

  const handleRemoveOutcome = (idx) => {
    setForm((prev) => ({ ...prev, learningOutcomes: prev.learningOutcomes.filter((_, i) => i !== idx) }));
  };

  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    let images = form.images || [];
    try {
      // Upload images if any
      if (imageFiles.length > 0) {
        const uploaded = await imageUploadMutation.mutateAsync(imageFiles);
        images = uploaded; // uploaded is now an array of {url, publicId}
        console.log('images from handleSubmit uploaded images if any:', images);
      }
      const payload = { ...form, images };
      if (course && course._id) {
        await updateMutation.mutateAsync({ id: course._id, payload });
      } else {
        await createMutation.mutateAsync(payload);
      }
    } catch (err) {
      setError('Failed to save course');
    }
  };

  // Helper to render categories as flat or indented (for parent/child)
  const renderCategoryOptions = (cats, parent = null, level = 0) => {
    return cats
      .filter(cat => String(cat.parent) === String(parent))
      .map(cat => [
        <option key={cat._id} value={cat._id}>{'—'.repeat(level) + ' ' + cat.name}</option>,
        ...renderCategoryOptions(cats, cat._id, level + 1)
      ]);
  };
console.log('form.images from CourseFormPage:', form);
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-2">{course ? 'Edit Course' : 'Add Course'}</h2>
      {error && <div className="text-red-500">{error}</div>}
      {(categoriesLoading || instructorsLoading) && <div>Loading...</div>}
      {(categoriesError || instructorsError) && <div className="text-red-500">Failed to load categories or instructors</div>}
      <div>
        <label className="block font-medium">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Slug</label>
        <input name="slug" value={form.slug} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <TextEditor value={form.description} onChange={handleEditorChange} />
      </div>
      <div>
        <label className="block font-medium">Thumbnail URL</label>
        <input name="thumbnail" value={form.thumbnail} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block font-medium">Images (multiple)</label>
        <input type="file" multiple onChange={handleImageChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" />
        <div className="flex flex-wrap gap-2 mt-2">
          {form.images && form.images.map((img, i) => (
            <img key={i} src={img.url} alt="Course" className="h-16 w-16 object-cover rounded" />
          ))}
        </div>
      </div>
      <div>
        <label className="block font-medium">Instructor</label>
        <select name="instructor" value={form.instructor} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" required>
          <option value="">Select Instructor</option>
          {instructors.map((inst) => (
            <option key={inst._id} value={inst._id}>{inst.name || inst.email}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium">Level</label>
        <select name="level" value={form.level} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Category</label>
        <select name="category" value={form.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" required>
          <option value="">Select Category</option>
          {renderCategoryOptions(categories)}
        </select>
      </div>
      <div>
        <label className="block font-medium">Duration</label>
        <input name="duration" value={form.duration} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block font-medium">Price</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block font-medium">Status</label>
        <select name="status" value={form.status} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Requirements</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={requirementInput}
            onChange={e => setRequirementInput(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 flex-1"
            placeholder="Add requirement"
          />
          <button type="button" className="btn btn-secondary" onClick={handleAddRequirement}>Add</button>
        </div>
        <ul className="list-disc list-inside text-xs text-gray-600">
          {form.requirements && form.requirements.map((req, i) => (
            <li key={i} className="flex items-center gap-2">
              {req}
              <button type="button" className="text-red-500 text-xs" onClick={() => handleRemoveRequirement(i)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label className="block font-medium">Learning Outcomes</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={outcomeInput}
            onChange={e => setOutcomeInput(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 flex-1"
            placeholder="Add learning outcome"
          />
          <button type="button" className="btn btn-secondary" onClick={handleAddOutcome}>Add</button>
        </div>
        <ul className="list-disc list-inside text-xs text-gray-600">
          {form.learningOutcomes && form.learningOutcomes.map((out, i) => (
            <li key={i} className="flex items-center gap-2">
              {out}
              <button type="button" className="text-red-500 text-xs" onClick={() => handleRemoveOutcome(i)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary" disabled={createMutation.isLoading || updateMutation.isLoading || imageUploadMutation.isLoading}>
          {(createMutation.isLoading || updateMutation.isLoading || imageUploadMutation.isLoading) ? 'Saving...' : 'Save'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default CourseFormPage; 