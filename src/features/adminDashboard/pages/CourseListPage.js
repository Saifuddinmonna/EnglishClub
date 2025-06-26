import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllCourses, deleteCourse } from '../services/courseService';

const PAGE_SIZE = 10;

const CourseListPage = ({ onEdit, onAdd }) => {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  // Query for all courses, with search and page as dependencies
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['courses', searchValue, page],
    queryFn: () => getAllCourses({ search: searchValue, page, limit: PAGE_SIZE }),
    keepPreviousData: true
  });

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteCourse(id);
      refetch();
    } catch (err) {
      alert('Failed to delete course');
    }
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
      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : isError ? (
        <div className="text-red-500">{error?.message || 'Failed to fetch courses'}</div>
      ) : (
        <>
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
                    <button className="btn btn-xs btn-error" onClick={() => handleDelete(course._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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