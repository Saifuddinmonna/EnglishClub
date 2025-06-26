import axios from 'axios';
import { DEV_TEST_API_BASE_URL } from '../../../api/serverApiForTestingInLocalhost';

const API_BASE = `${DEV_TEST_API_BASE_URL}/courses`;

export const getAllCourses = async ({ search = '', page = 1, limit = 10 } = {}) => {
  const params = {};
  if (search) params.search = search;
  if (page) params.page = page;
  if (limit) params.limit = limit;
  const res = await axios.get(API_BASE, { params });
  // Return the data as-is (with pagination)
  console.log("res.data from courseService",res.data);
  return res.data;
};

export const getCourseById = async (id) => {
  const res = await axios.get(`${API_BASE}/${id}`);
  return res.data;
};

export const createCourse = async (course) => {
  const token = localStorage.getItem('token');
  const res = await axios.post(API_BASE, course, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateCourse = async (id, course) => {
  const token = localStorage.getItem('token');
  const res = await axios.put(`${API_BASE}/${id}`, course, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteCourse = async (id) => {
  const token = localStorage.getItem('token'); // or whatever your key is
  const res = await axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}; 