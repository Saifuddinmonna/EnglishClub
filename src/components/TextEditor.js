import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const DEFAULT_API_KEY = process.env.REACT_APP_TINYMCE_API_KEY;

const DEFAULT_PLUGINS = [
  'advlist autolink lists link image charmap preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table help wordcount'
];

const DEFAULT_TOOLBAR =
  'undo redo | blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';

const DEFAULT_MENUBAR = 'file edit view insert format tools table help';

const DEFAULT_HEIGHT = 400;

const DEFAULT_CONTENT_CSS = 'default';

const TextEditor = ({
  value,
  onChange,
  apiKey = DEFAULT_API_KEY,
  plugins = DEFAULT_PLUGINS,
  toolbar = DEFAULT_TOOLBAR,
  menubar = DEFAULT_MENUBAR,
  height = DEFAULT_HEIGHT,
  content_css = DEFAULT_CONTENT_CSS,
  ...props
}) => {
  return (
    <Editor
      apiKey={apiKey}
      value={value}
      init={{
        height,
        menubar,
        plugins,
        toolbar,
        content_css,
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        images_upload_handler: async (blobInfo, success, failure) => {
          const formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          const res = await fetch('/your-upload-endpoint', { method: 'POST', body: formData });
          const data = await res.json();
          if (data.url) success(data.url);
          else failure('Upload failed');
        }
      }}
      onEditorChange={onChange}
      {...props}
    />
  );
};

export default TextEditor; 