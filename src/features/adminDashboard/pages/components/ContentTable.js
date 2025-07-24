import React from 'react';
import { deleteContent } from '../../../../services/apiService';
import toast from '../../../../services/toastService';

const ContentTable = ({ contents, onEdit, onShowForm, refetch }) => {
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this content?')) return;
    try {
      await deleteContent(id);
      toast.showSuccess('Content deleted successfully');
      refetch();
    } catch (err) {
      toast.showError('Failed to delete content');
    }
  };

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Author</th>
          <th>Visibility</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(contents) && contents.length > 0 ? (
          contents.map((content) => (
            <tr key={content._id}>
              <td>{content.title}</td>
              <td>{content.type}</td>
              <td>{content.author?.name || content.author || '-'}</td>
              <td>{content.visibility}</td>
              <td>
                <button className="btn btn-xs btn-info mr-2" onClick={() => onEdit(content)}>Edit</button>
                <button className="btn btn-xs btn-success mr-2" onClick={() => window.location.href = `/dashboard/admin/content/${content._id}/details`}>Details</button>
                <button className="btn btn-xs btn-error" onClick={() => handleDelete(content._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="5" className="text-center">No content found</td></tr>
        )}
      </tbody>
    </table>
  );
};

export default ContentTable;
