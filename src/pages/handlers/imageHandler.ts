import { RefObject } from 'react';
import ReactQuill from 'react-quill';

// Custom image handler
export const imageHandler = (quillRef: RefObject<ReactQuill>) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      // Replace with your own upload function
      const url = await uploadImage(formData);

      // Replace with your own upload function
      const range = quillRef.current?.getEditor().getSelection();
      if (range) {
        quillRef.current?.getEditor().insertEmbed(range.index, 'image', url);
      }
    }
  };
};

const uploadImage = async (formData: FormData): Promise<string> => {
  const response = await fetch('YOUR_IMAGE_UPLOAD_ENDPOINT', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Error uploading image');
  }

  const data = await response.json();
  return data.url; // Assumes the server returns the image URL in the response
};