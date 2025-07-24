import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getContentById } from '../../../services/apiService';
import ContentForm from './components/ContentForm';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'files', label: 'Files' },
  { id: 'comments', label: 'Comments' },
];

const ContentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: content, isLoading, error } = useQuery({
    queryKey: ['content', id],
    queryFn: () => getContentById(id),
  });
  const [tab, setTab] = React.useState('overview');
  const [showEdit, setShowEdit] = React.useState(false);

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Failed to fetch content details</div>;
  if (!content) return <div className="p-8 text-center">No content found.</div>;

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex justify-between items-center mb-4">
        <button className="btn btn-secondary" onClick={() => navigate('/dashboard/admin/content')}>Back</button>
        <button className="btn btn-info" onClick={() => setShowEdit(true)}>Edit</button>
      </div>
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2 className="text-2xl font-bold text-blue-800">{content.title}</h2>
        <div className="flex gap-2">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${tab === t.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px]">
        {tab === 'overview' && (
          <div>
            <div className="mb-2 text-gray-700"><b>Type:</b> {content.type}</div>
            <div className="mb-2 text-gray-700"><b>Author:</b> {content.author?.name || content.author?.email || '-'}</div>
            <div className="mb-2 text-gray-700"><b>Categories:</b> {content.categories?.map(cat => cat.name || cat).join(', ')}</div>
            <div className="mb-2 text-gray-700"><b>Access Level:</b> {content.accessLevel}</div>
            <div className="mb-2 text-gray-700"><b>Visibility:</b> {content.visibility}</div>
            <div className="mb-2 text-gray-700"><b>Downloadable:</b> {content.isDownloadable ? 'Yes' : 'No'}</div>
            <div className="mb-2 text-gray-700"><b>Copyable:</b> {content.isCopyable ? 'Yes' : 'No'}</div>
            <div className="mb-2 text-gray-700"><b>Tags:</b> {content.tags?.join(', ') || 'None'}</div>
            <div className="mb-2 text-gray-700"><b>Created At:</b> {new Date(content.createdAt).toLocaleString()}</div>
            <div className="mb-2 text-gray-700"><b>Updated At:</b> {new Date(content.updatedAt).toLocaleString()}</div>
            <div className="mb-2 text-gray-700"><b>Slug:</b> {content.slug}</div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Content Body</h3>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.contentBody }} />
            </div>
          </div>
        )}
        {tab === 'files' && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Images</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {content.images?.length ? content.images.map(img => (
                <img key={img._id} src={img.url} alt={img.altText} className="w-32 h-32 object-cover rounded shadow" />
              )) : <span className="text-gray-500">No images</span>}
            </div>
            <h3 className="font-semibold text-lg mb-2">PDF Files</h3>
            <ul className="mb-4">
              {content.pdfFiles?.length ? content.pdfFiles.map(pdf => (
                <li key={pdf._id} className="mb-2">
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pdf.title || pdf.url}</a>
                </li>
              )) : <span className="text-gray-500">No PDFs</span>}
            </ul>
            <h3 className="font-semibold text-lg mb-2">DOCX Files</h3>
            <ul className="mb-4">
              {content.docFiles?.length ? content.docFiles.map(doc => (
                <li key={doc._id} className="mb-2">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{doc.title || doc.url}</a>
                </li>
              )) : <span className="text-gray-500">No DOCX files</span>}
            </ul>
            <h3 className="font-semibold text-lg mb-2">HTML Files</h3>
            <ul className="mb-4">
              {content.htmlFiles?.length ? content.htmlFiles.map(html => (
                <li key={html._id} className="mb-2">
                  <a href={html.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{html.title || html.url}</a>
                </li>
              )) : <span className="text-gray-500">No HTML files</span>}
            </ul>
          </div>
        )}
        {tab === 'comments' && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Comments</h3>
            {content.comments?.length ? (
              <ul>
                {content.comments.map((comment, idx) => (
                  <li key={comment._id || idx} className="mb-2 p-2 bg-gray-100 rounded">
                    <div className="text-gray-800">{comment.text}</div>
                    <div className="text-xs text-gray-500">By {comment.author?.name || comment.author || 'Unknown'} on {new Date(comment.createdAt).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            ) : <span className="text-gray-500">No comments</span>}
          </div>
        )}
      </div>
      {showEdit && (
        <ContentForm content={content} onClose={() => setShowEdit(false)} modalWidth="max-w-4xl" />
      )}
    </div>
  );
};

export default ContentDetailsPage; 