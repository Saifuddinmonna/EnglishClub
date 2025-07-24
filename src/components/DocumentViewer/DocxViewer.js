import React, { useState } from 'react';
import mammoth from 'mammoth';

const DocxViewer = ({ file }) => {
  const [content, setContent] = useState('');

  React.useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;
      const { value } = await mammoth.convertToHtml({ arrayBuffer });
      setContent(value);
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DocxViewer; 