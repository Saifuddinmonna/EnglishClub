import React, { useState, useEffect } from 'react';
import TextEditor from '../../../components/TextEditor';
import { createCourse, updateCourse } from '../services/courseService';

const initialState = {
  title: '',
  slug: '',
  description: '',
  level: 'beginner',
  category: 'grammar',
  duration: '4 weeks',
  requirements: [],
  learningOutcomes: [],
  price: 0,
  status: 'draft',
};

const CourseFormPage = ({ course, onSuccess, onCancel }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (course) setForm({ ...initialState, ...course });
    else setForm(initialState);
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setForm((prev) => ({ ...prev, description: content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (course && course._id) {
        await updateCourse(course._id, form);
      } else {
        await createCourse(form);
      }
      onSuccess();
    } catch (err) {
      setError('Failed to save course');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-2">{course ? 'Edit Course' : 'Add Course'}</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block font-medium">Title</label>
        <input name="title" value={form.title} onChange={handleChange} className="input input-bordered w-full" required />
      </div>
      <div>
        <label className="block font-medium">Slug</label>
        <input name="slug" value={form.slug} onChange={handleChange} className="input input-bordered w-full" required />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <TextEditor value={form.description} onChange={handleEditorChange} />
      </div>
      <div>
        <label className="block font-medium">Level</label>
        <select name="level" value={form.level} onChange={handleChange} className="input input-bordered w-full">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Category</label>
        <select name="category" value={form.category} onChange={handleChange} className="input input-bordered w-full">
          <option value="grammar">Grammar</option>
          <option value="vocabulary">Vocabulary</option>
          <option value="speaking">Speaking</option>
          <option value="listening">Listening</option>
          <option value="reading">Reading</option>
          <option value="writing">Writing</option>
          <option value="business">Business</option>
          <option value="academic">Academic</option>
          <option value="conversation">Conversation</option>
          <option value="exam_preparation">Exam Preparation</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Duration</label>
        <input name="duration" value={form.duration} onChange={handleChange} className="input input-bordered w-full" />
      </div>
      <div>
        <label className="block font-medium">Price</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} className="input input-bordered w-full" />
      </div>
      <div>
        <label className="block font-medium">Status</label>
        <select name="status" value={form.status} onChange={handleChange} className="input input-bordered w-full">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default CourseFormPage; 