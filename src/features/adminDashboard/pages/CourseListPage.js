import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllCourses, deleteCourse } from '../services/courseService';

const PAGE_SIZE = 10;

const CourseListPage = ({ onEdit, onAdd }) => {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState('table'); // 'table', 'card', 'list'
  const queryClient = useQueryClient();

  // Query for all courses, with search and page as dependencies
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching
  } = useQuery({
    queryKey: ['courses', searchValue, page],
    queryFn: () => getAllCourses({ search: searchValue, page, limit: PAGE_SIZE }),
    keepPreviousData: true
  });

  // Mutation for deleting a course
  const deleteMutation = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    },
  });

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    deleteMutation.mutate(id);
  };

  const handleSearch = () => {
    setSearchValue(search);
    setPage(1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (data?.pagination?.currentPage < data?.pagination?.totalPages) setPage(page + 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <button className="btn btn-primary" onClick={onAdd}>Add Course</button>
      </div>
      {/* View Mode Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          className={`btn btn-sm ${viewMode === 'table' ? 'btn-info' : 'btn-ghost'}`}
          onClick={() => setViewMode('table')}
        >
          Table
        </button>
        <button
          className={`btn btn-sm ${viewMode === 'card' ? 'btn-info' : 'btn-ghost'}`}
          onClick={() => setViewMode('card')}
        >
          Card
        </button>
        <button
          className={`btn btn-sm ${viewMode === 'list' ? 'btn-info' : 'btn-ghost'}`}
          onClick={() => setViewMode('list')}
        >
          List
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
        <button className="btn btn-secondary" onClick={handleSearch} disabled={isFetching}>Search</button>
      </div>
      {(isLoading || isFetching) && <div>Loading...</div>}
      {isError && <div className="text-red-500">{error?.message || 'Failed to fetch courses'}</div>}
      {deleteMutation.isError && <div className="text-red-500">Failed to delete course</div>}
      {deleteMutation.isLoading && <div>Deleting...</div>}
      {!(isLoading || isFetching || isError) && (
        <>
          {/* Table Mode */}
          {viewMode === 'table' && (
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Instructor</th>
                  <th>Level</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map(course => (
                  <tr key={course._id}>
                    <td>{course.title}</td>
                    <td>{course.instructor?.name || course.instructor}</td>
                    <td>{course.level}</td>
                    <td>{course.category}</td>
                    <td>{course.status}</td>
                    <td>
                      <button className="btn btn-xs btn-info mr-2" onClick={() => onEdit(course)}>Edit</button>
                      <button className="btn btn-xs btn-error" onClick={() => handleDelete(course._id)} disabled={deleteMutation.isLoading}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Card Mode */}
          {viewMode === 'card' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.data?.map(course => (
                <div key={course._id} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <div className="text-sm text-gray-600 mb-1">Instructor: {course.instructor?.name || course.instructor}</div>
                    <div className="text-xs text-gray-500 mb-1">Level: {course.level}</div>
                    <div className="text-xs text-gray-500 mb-1">Category: {course.category}</div>
                    <div className="text-xs text-gray-500 mb-1">Status: {course.status}</div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="btn btn-xs btn-info" onClick={() => onEdit(course)}>Edit</button>
                    <button className="btn btn-xs btn-error" onClick={() => handleDelete(course._id)} disabled={deleteMutation.isLoading}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* List Mode */}
          {viewMode === 'list' && (
            <ul className="divide-y divide-gray-200">
              {data?.data?.map(course => (
                <li key={course._id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="font-semibold text-gray-900">{course.title}</span>
                    <span className="ml-2 text-sm text-gray-600">({course.level}, {course.category})</span>
                    <div className="text-xs text-gray-500">Instructor: {course.instructor?.name || course.instructor}</div>
                    <div className="text-xs text-gray-500">Status: {course.status}</div>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <button className="btn btn-xs btn-info" onClick={() => onEdit(course)}>Edit</button>
                    <button className="btn btn-xs btn-error" onClick={() => handleDelete(course._id)} disabled={deleteMutation.isLoading}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button className="btn btn-sm" onClick={handlePrev} disabled={page === 1}>Prev</button>
            <span>
              Page {data?.pagination?.currentPage || 1} of {data?.pagination?.totalPages || 1}
            </span>
            <button className="btn btn-sm" onClick={handleNext} disabled={data?.pagination?.currentPage >= data?.pagination?.totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseListPage; 