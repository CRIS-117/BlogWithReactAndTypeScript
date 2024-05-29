import { RefObject } from 'react';
import ReactQuill from 'react-quill';
import { imageHandler } from "../pages/handlers/imageHandler"

export const modules = (quillRef: RefObject<ReactQuill>) => ({
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      ['link', 'image'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ],
    handlers: {
      image: () => imageHandler(quillRef),
    }
  },
  imageResize: {
    modules: ['Resize', 'DisplaySize', 'Toolbar'],
  },
});