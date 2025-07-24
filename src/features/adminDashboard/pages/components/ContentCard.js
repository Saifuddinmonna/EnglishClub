import React from 'react';
import { deleteContent } from '../../../../services/apiService';
import toast from '../../../../services/toastService';

const ContentCard = ({ contents, onEdit, onShowForm, refetch }) => {
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

  if (!Array.isArray(contents) || contents.length === 0) {
    return <div className="text-center">No content found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contents.map((content) => (
        <div key={content._id} className="rounded-lg shadow p-4 flex flex-col justify-between" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text)', border: '1px solid var(--color-border)', margin: 'var(--standard-margin)', padding: 'var(--standard-padding)' }}>
          <div>
            <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
            <div className="text-sm mb-1">Type: {content.type}</div>
            <div className="text-xs mb-1">Author: {content.author?.name || content.author || '-'}</div>
            <div className="text-xs mb-1">Visibility: {content.visibility}</div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="btn btn-xs btn-info" onClick={() => onEdit(content)}>Edit</button>
            <button className="btn btn-xs btn-success" onClick={() => window.location.href = `/dashboard/admin/content/${content._id}/details`}>Details</button>
            <button className="btn btn-xs btn-error" onClick={() => handleDelete(content._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
