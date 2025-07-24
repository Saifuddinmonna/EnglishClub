import React from 'react';
import PDFViewer from '../../../../components/DocumentViewer/PDFViewer';
import DocxViewer from '../../../../components/DocumentViewer/DocxViewer';

const ContentFilePreview = ({ file, type }) => {
  // Helper to get file URL
  const getFileUrl = (file) => {
    if (!file) return '';
    if (file instanceof File) return URL.createObjectURL(file);
    if (typeof file === 'string') return file;
    if (file.url) return file.url;
    return '';
  };
  const url = getFileUrl(file);

  if (type === 'images') {
    return (
      <div style={{ maxWidth: 120, maxHeight: 120, overflow: 'hidden', borderRadius: 8, border: '1px solid var(--color-border)' }}>
        <img src={url} alt={file.name || file.title || 'image'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="text-xs text-center mt-1" style={{ color: 'var(--color-text-muted)' }}>{file.name || file.title}</div>
      </div>
    );
  }
  if (type === 'pdfFiles') {
    return (
      <div style={{ width: 120, height: 120, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <PDFViewer file={url} />
        <div className="text-xs text-center mt-1" style={{ color: 'var(--color-text-muted)' }}>{file.name || file.title}</div>
      </div>
    );
  }
  if (type === 'docFiles') {
    return (
      <div style={{ width: 120, height: 120, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <DocxViewer file={file instanceof File ? file : url} />
        <div className="text-xs text-center mt-1" style={{ color: 'var(--color-text-muted)' }}>{file.name || file.title}</div>
      </div>
    );
  }
  if (type === 'htmlFiles') {
    return (
      <div style={{ width: 120, height: 120, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <iframe src={url} title={file.name || file.title || 'HTML'} style={{ width: '100%', height: '100%' }} />
        <div className="text-xs text-center mt-1" style={{ color: 'var(--color-text-muted)' }}>{file.name || file.title}</div>
      </div>
    );
  }
  // Default: just show file name
  return <div className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>{file.name || file.title || 'File'}</div>;
};

export default ContentFilePreview;
