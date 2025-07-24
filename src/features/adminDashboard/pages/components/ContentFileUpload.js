import React, { useRef } from 'react';
import ContentFilePreview from './ContentFilePreview';

const ContentFileUpload = ({ files = [], onChange, type }) => {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onChange([...files, ...droppedFiles]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChange([...files, ...selectedFiles]);
  };

  const handleRemove = (index) => {
    const updated = files.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div
      className="border-2 border-dashed rounded p-4 mb-2 flex flex-col gap-2"
      style={{ background: 'var(--color-bg-card)' }}
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      onClick={() => inputRef.current && inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={type === 'images' ? 'image/*' : type === 'pdfFiles' ? 'application/pdf' : type === 'docFiles' ? '.doc,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document' : type === 'htmlFiles' ? '.html,text/html' : '*'}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div className="text-center text-sm text-gray-500 dark:text-gray-400" style={{ color: 'var(--color-text-muted)' }}>
        Drag & drop or click to select {type.replace('Files', '').toUpperCase()} files
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {files.map((file, idx) => (
          <div key={idx} className="relative">
            <ContentFilePreview file={file} type={type} />
            <button
              type="button"
              className="absolute top-0 right-0 btn btn-xs btn-error"
              onClick={e => { e.stopPropagation(); handleRemove(idx); }}
              style={{ zIndex: 2 }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFileUpload;
