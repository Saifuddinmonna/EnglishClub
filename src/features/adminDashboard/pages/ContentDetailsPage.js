import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getContentById } from '../../../services/apiService';
import ContentForm from './components/ContentForm';
import DocumentViewer from '../../../components/DocumentViewer/DocumentViewer';
import PDFViewer from '../../../components/DocumentViewer/PDFViewer';
import DocxViewer from '../../../components/DocumentViewer/DocxViewer';

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
  const [previewFile, setPreviewFile] = React.useState(null); // { url, title }
  const [pdfBlob, setPdfBlob] = React.useState(null);
  const [docxBlob, setDocxBlob] = React.useState(null);
  const [htmlContent, setHtmlContent] = React.useState('');
  const [loadingPreview, setLoadingPreview] = React.useState(false);
  const [previewError, setPreviewError] = React.useState('');

  // Helper to detect file type
  const getFileType = (url) => {
    if (!url) return '';
    const ext = url.split('.').pop().toLowerCase();
    if (ext === 'pdf') return 'pdf';
    if (ext === 'docx' || ext === 'doc') return 'docx';
    if (ext === 'html' || ext === 'htm') return 'html';
    return '';
  };

  // Helper to fetch file as Blob
  const fetchFileAsBlob = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch file');
    return await response.blob();
  };

  // Effect to fetch and prepare preview file
  React.useEffect(() => {
    if (!previewFile) return;
    setLoadingPreview(true);
    setPreviewError('');
    setPdfBlob(null);
    setDocxBlob(null);
    setHtmlContent('');
    const type = getFileType(previewFile.url);
    if (type === 'pdf') {
      fetchFileAsBlob(previewFile.url)
        .then(blob => setPdfBlob(blob))
        .catch(() => setPreviewError('Failed to load PDF file.'))
        .finally(() => setLoadingPreview(false));
    } else if (type === 'docx') {
      fetchFileAsBlob(previewFile.url)
        .then(blob => setDocxBlob(blob))
        .catch(() => setPreviewError('Failed to load DOCX file.'))
        .finally(() => setLoadingPreview(false));
    } else if (type === 'html') {
      fetch(previewFile.url)
        .then(res => res.text())
        .then(setHtmlContent)
        .catch(() => setHtmlContent('<div style="color:red">Failed to load HTML file.</div>'))
        .finally(() => setLoadingPreview(false));
    } else {
      setPreviewError('Unsupported file type.');
      setLoadingPreview(false);
    }
  }, [previewFile]);

  // Clean up preview state on close
  const closePreview = () => {
    setPreviewFile(null);
    setPdfBlob(null);
    setDocxBlob(null);
    setHtmlContent('');
    setLoadingPreview(false);
    setPreviewError('');
  };

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
                <li key={pdf._id} className="mb-2 flex items-center gap-2">
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pdf.title || pdf.url}</a>
                  <button className="btn btn-xs btn-outline" onClick={() => setPreviewFile({ url: pdf.url, title: pdf.title || 'PDF File' })}>Preview</button>
                </li>
              )) : <span className="text-gray-500">No PDFs</span>}
            </ul>
            <h3 className="font-semibold text-lg mb-2">DOCX Files</h3>
            <ul className="mb-4">
              {content.docFiles?.length ? content.docFiles.map(doc => (
                <li key={doc._id} className="mb-2 flex items-center gap-2">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{doc.title || doc.url}</a>
                  <button className="btn btn-xs btn-outline" onClick={() => setPreviewFile({ url: doc.url, title: doc.title || 'DOCX File' })}>Preview</button>
                </li>
              )) : <span className="text-gray-500">No DOCX files</span>}
            </ul>
            <h3 className="font-semibold text-lg mb-2">HTML Files</h3>
            <ul className="mb-4">
              {content.htmlFiles?.length ? content.htmlFiles.map(html => (
                <li key={html._id} className="mb-2 flex items-center gap-2">
                  <a href={html.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{html.title || html.url}</a>
                  <button className="btn btn-xs btn-outline" onClick={() => setPreviewFile({ url: html.url, title: html.title || 'HTML File' })}>Preview</button>
                </li>
              )) : <span className="text-gray-500">No HTML files</span>}
            </ul>
            {/* File Preview Modal */}
            {previewFile && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative">
                  <button className="absolute top-2 right-2 btn btn-sm btn-error" onClick={closePreview}>X</button>
                  <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
                    {previewFile.title}
                    <a
                      href={previewFile.url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-success"
                    >
                      Download
                    </a>
                  </div>
                  <div className="p-4" style={{ minHeight: 400 }}>
                    {loadingPreview && <div>Loading...</div>}
                    {previewError && <div className="text-red-500">{previewError}</div>}
                    {!loadingPreview && !previewError && getFileType(previewFile.url) === 'pdf' && pdfBlob && (
                      <PDFViewer file={pdfBlob} />
                    )}
                    {!loadingPreview && !previewError && getFileType(previewFile.url) === 'docx' && docxBlob && (
                      <DocxViewer file={docxBlob} />
                    )}
                    {!loadingPreview && !previewError && getFileType(previewFile.url) === 'html' && (
                      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    )}
                  </div>
                </div>
              </div>
            )}
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