import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Create Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token and content type
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Auto-detect FormData for multipart
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Generic request
export const apiRequest = (config) => api(config);

// CRUD helpers
export const apiGet = (url, config) => api.get(url, config).then(res => res.data);
export const apiPost = (url, data, config) => api.post(url, data, config).then(res => res.data);
export const apiPut = (url, data, config) => api.put(url, data, config).then(res => res.data);
export const apiDelete = (url, config) => api.delete(url, config).then(res => res.data);

// TanStack Query hooks
export const useApiQuery = (key, url, options = {}) =>
  useQuery({
    queryKey: key,
    queryFn: () => apiGet(url),
    ...options,
  });

export const useApiMutation = (method, url, options = {}) =>
  useMutation({
    mutationFn: (data) => {
      switch (method) {
        case 'post': return apiPost(url, data);
        case 'put': return apiPut(url, data);
        case 'delete': return apiDelete(url, data);
        default: return apiRequest({ url, method, data });
      }
    },
    ...options,
  });

// ========== Content API ========== //
// Custom axios instance for content creation/update with longer timeout
const apiContent = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/v1/content',
  timeout: 30000, // 30 seconds for create/update
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to apiContent as well
apiContent.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Get all contents (public)
export const getAllContents = (params) =>
  api.get('/v1/content', { params }).then(res => res.data);

// Get content by slug (public)
export const getContentBySlug = (slug) =>
  api.get(`/v1/content/${slug}`).then(res => res.data);

// Get content by ID (admin/private)
export const getContentById = (id) =>
  api.get(`/v1/content/${id}`).then(res => res.data);

// Create content (admin, long timeout, supports FormData)
export const createContent = (data) => {
  console.log("[apiService] createContent called with:", data);
  return apiContent.post('/', data, {
    headers: data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
  }).then(res => res.data);
};

// Update content text (admin, PUT, JSON only)
export const updateContentTextJson = (contentId, data) =>
  apiContent.put(`/${contentId}`, data).then(res => res.data);

// Update content with files (admin, PUT, multipart/form-data)
export const updateContentTextMultipart = (contentId, formData) => {
  // Remove unnecessary fields from FormData
  ['_id', 'createdAt', 'updatedAt', '__v', 'slug', 'commentCount', 'comments'].forEach(field => {
    if (formData.has(field)) formData.delete(field);
  });
  return apiContent.put(`/${contentId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);
};

// Delete content (admin)
export const deleteContent = (contentId) =>
  api.delete(`/v1/content/${contentId}`).then(res => res.data);

// Add image to content (teacher/admin)
export const addImageToContent = (contentId, formData) =>
  apiContent.post(`/${contentId}/images`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);

// Delete image from content (teacher/admin)
export const deleteImageFromContent = (contentId, fileId) =>
  api.delete(`/v1/content/${contentId}/images/${fileId}`).then(res => res.data);

// Add PDF to content
export const addPdfToContent = (contentId, formData) =>
  apiContent.post(`/${contentId}/pdfs`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);

// Delete PDF from content
export const deletePdfFromContent = (contentId, fileId) =>
  apiContent.delete(`/${contentId}/pdfs/${fileId}`).then(res => res.data);

// Add DOCX to content
export const addDocToContent = (contentId, formData) =>
  apiContent.post(`/${contentId}/docs`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);

// Delete DOCX from content
export const deleteDocFromContent = (contentId, fileId) =>
  apiContent.delete(`/${contentId}/docs/${fileId}`).then(res => res.data);

// Add HTML to content
export const addHtmlToContent = (contentId, formData) =>
  apiContent.post(`/${contentId}/htmls`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);

// Delete HTML from content
export const deleteHtmlFromContent = (contentId, fileId) =>
  apiContent.delete(`/${contentId}/htmls/${fileId}`).then(res => res.data);

export default api; 