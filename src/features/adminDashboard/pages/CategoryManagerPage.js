import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DEV_TEST_API_BASE_URL } from '../../../api/serverApiForTestingInLocalhost';
import { FaChevronDown, FaChevronRight, FaEdit, FaTrash } from 'react-icons/fa';

const initialForm = {
  name: '',
  slug: '',
  description: '',
  icon: '',
  image: '',
  type: 'general',
  status: 'active',
  parent: '',
  order: 0,
};

const TYPE_OPTIONS = ['course', 'content', 'quiz', 'user', 'general'];
const STATUS_OPTIONS = ['active', 'inactive'];
const API_BASE = `${DEV_TEST_API_BASE_URL}/categories`;

const getToken = () => localStorage.getItem('token');

const fetchCategories = async () => {
  const token = getToken();
  const res = await axios.get(API_BASE, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data || [];
};

const createCategory = async (form) => {
  const token = getToken();
  const res = await axios.post(API_BASE, form, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

const updateCategory = async ({ id, form }) => {
  const token = getToken();
  const res = await axios.put(`${API_BASE}/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

const deleteCategory = async (id) => {
  const token = getToken();
  const res = await axios.delete(`${API_BASE}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const CategoryManagerPage = () => {
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'tree'
  const queryClient = useQueryClient();

  // State to track collapsed nodes
  const [collapsed, setCollapsed] = useState({});

  // Fetch categories
  const {
    data: categories = [],
    isLoading,
    isError,
    error: fetchError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Log categories data for user
  console.log('Fetched categories:', categories);

  // Mutations
  const createMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      setShowForm(false);
      setForm(initialForm);
      setEditingId(null);
    },
    onError: () => setError('Failed to create category'),
  });

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      setShowForm(false);
      setForm(initialForm);
      setEditingId(null);
    },
    onError: () => setError('Failed to update category'),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries(['categories']),
    onError: () => setError('Failed to delete category'),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (cat) => {
    setForm({
      name: cat.name || '',
      slug: cat.slug || '',
      description: cat.description || '',
      icon: cat.icon || '',
      image: cat.image || '',
      type: cat.type || 'general',
      status: cat.status || 'active',
      parent: cat.parent || '',
      order: cat.order || 0,
    });
    setEditingId(cat._id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    setError(null);
    deleteMutation.mutate(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (editingId) {
      updateMutation.mutate({ id: editingId, form });
    } else {
      createMutation.mutate(form);
    }
  };

  const handleAddNew = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(true);
  };

  // Toggle collapse/expand
  const handleToggle = (id) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to generate hierarchical numbering
  const getNumbering = (cats, cat, parent, prefix = '') => {
    const siblings = cats.filter(c => String(c.parent) === String(parent)).sort((a, b) => (a.order || 0) - (b.order || 0));
    const index = siblings.findIndex(c => c._id === cat._id) + 1;
    const number = prefix ? `${prefix}.${index}` : `${index}`;
    return number;
  };

  // Enhanced tree view with numbering and lines
  const renderTreeNodes = (cats, parent = null, level = 0, prefix = '') => {
    const children = cats
      .filter(cat => String(cat.parent) === String(parent))
      .sort((a, b) => (a.order || 0) - (b.order || 0));
    return children.map(cat => {
      const hasChildren = cats.some(c => String(c.parent) === String(cat._id));
      const isCollapsed = collapsed[cat._id];
      const numbering = getNumbering(cats, cat, parent, prefix);
      return (
        <div
          key={cat._id}
          style={{
            marginLeft: level === 0 ? 0 : 'var(--standard-margin)',
            position: 'relative',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
          }}
          className={`tree-node group flex items-center gap-2 pl-2 rounded transition hover:bg-blue-50 focus-within:bg-blue-100`}
          tabIndex={0}
          aria-label={`Category ${cat.name}`}
        >
          {/* Vertical line for children */}
          {level > 0 && (
            <span
              style={{
                position: 'absolute',
                left: '-1.25rem',
                top: 0,
                bottom: 0,
                width: '1.25rem',
                borderLeft: '2px solid var(--color-border)',
                zIndex: 0,
              }}
              aria-hidden="true"
            />
          )}
          {/* Horizontal connector */}
          {level > 0 && (
            <span
              style={{
                position: 'absolute',
                left: '-1.25rem',
                top: '1.1rem',
                width: '1.25rem',
                height: 0,
                borderTop: '2px solid var(--color-border)',
                zIndex: 1,
              }}
              aria-hidden="true"
            />
          )}
          {hasChildren ? (
            <button
              aria-label={isCollapsed ? 'Expand category' : 'Collapse category'}
              onClick={() => handleToggle(cat._id)}
              className="mr-1 p-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition"
              tabIndex={0}
              style={{ outline: 'none', border: 'none', background: 'none', zIndex: 2 }}
            >
              {isCollapsed ? <FaChevronRight size={16} /> : <FaChevronDown size={16} />}
            </button>
          ) : (
            <span style={{ width: 18, display: 'inline-block' }}></span>
          )}
          {/* Numbering */}
          <span style={{ minWidth: 40, fontWeight: 600, color: 'var(--color-primary)' }}>{numbering}</span>
          <span className={`inline-block px-2 py-1 ${level === 0 ? 'bg-blue-100 text-blue-800 font-bold' : 'bg-gray-100 text-gray-700'} rounded`} style={{ zIndex: 2 }}>{cat.name}</span>
          <button
            className="ml-2 p-1 rounded hover:bg-blue-200 focus:bg-blue-300 transition"
            aria-label="Edit category"
            title="Edit"
            onClick={() => handleEdit(cat)}
            tabIndex={0}
          >
            <FaEdit size={16} />
          </button>
          <button
            className="p-1 rounded hover:bg-red-100 focus:bg-red-200 transition"
            aria-label="Delete category"
            title="Delete"
            onClick={() => handleDelete(cat._id)}
            tabIndex={0}
          >
            <FaTrash size={16} />
          </button>
          {/* Children */}
          <div className={`w-full transition-all duration-200 ${isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-[1000px]'}`}
            aria-hidden={isCollapsed}
          >
            {!isCollapsed && renderTreeNodes(cats, cat._id, level + 1, numbering)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <div className="flex gap-2 mb-4">
        <button
          className={`btn btn-sm ${viewMode === 'table' ? 'btn-info' : 'btn-ghost'}`}
          onClick={() => setViewMode('table')}
        >
          Table View
        </button>
        <button
          className={`btn btn-sm ${viewMode === 'tree' ? 'btn-info' : 'btn-ghost'}`}
          onClick={() => setViewMode('tree')}
        >
          Tree View
        </button>
      </div>
      <button className="btn btn-primary mb-4" onClick={handleAddNew}>Add New Category</button>
      {(error || isError || fetchError) && <div className="text-red-500 mb-2">{error || fetchError?.message || 'Failed to fetch categories'}</div>}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mb-6 space-y-3">
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-medium">Name</label>
              <input name="name" value={form.name} onChange={handleInputChange} className="input input-bordered w-full" required />
            </div>
            <div className="flex-1">
              <label className="block font-medium">Slug</label>
              <input name="slug" value={form.slug} onChange={handleInputChange} className="input input-bordered w-full" required />
            </div>
          </div>
          <div>
            <label className="block font-medium">Description</label>
            <input name="description" value={form.description} onChange={handleInputChange} className="input input-bordered w-full" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-medium">Icon</label>
              <input name="icon" value={form.icon} onChange={handleInputChange} className="input input-bordered w-full" />
            </div>
            <div className="flex-1">
              <label className="block font-medium">Image URL</label>
              <input name="image" value={form.image} onChange={handleInputChange} className="input input-bordered w-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-medium">Type</label>
              <select name="type" value={form.type} onChange={handleInputChange} className="input input-bordered w-full">
                {TYPE_OPTIONS.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-medium">Status</label>
              <select name="status" value={form.status} onChange={handleInputChange} className="input input-bordered w-full">
                {STATUS_OPTIONS.map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-medium">Parent Category</label>
              <select name="parent" value={form.parent} onChange={handleInputChange} className="input input-bordered w-full">
                <option value="">None</option>
                {categories.filter(cat => !editingId || cat._id !== editingId).map(cat => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-medium">Order</label>
              <input name="order" type="number" value={form.order} onChange={handleInputChange} className="input input-bordered w-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary" disabled={createMutation.isLoading || updateMutation.isLoading}>{(createMutation.isLoading || updateMutation.isLoading) ? 'Saving...' : (editingId ? 'Update' : 'Create')}</button>
            <button type="button" className="btn btn-secondary" onClick={() => { setShowForm(false); setEditingId(null); setForm(initialForm); }}>Cancel</button>
          </div>
        </form>
      )}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          // Only show the improved tree view
          <div className="bg-white rounded shadow p-4">
            {renderTreeNodes(categories)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryManagerPage; 