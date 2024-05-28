import { useState, useRef, useEffect, useMemo } from 'react';

import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react'
import { modules } from '../../modules/quillModules';

// Register the image resizing module with Quill
Quill.register('modules/imageResize', ImageResize);

import { useDropzone } from 'react-dropzone'
import { PreviewFile } from '../../models';
import { 
  baseStyle, 
  focusedStyle,
  acceptStyle,
  rejectStyle,
  thumbsContainer,
  thumb,
  thumbInner,
  img
} from '../../styles/dropzoneStyles';

import {Input} from "@nextui-org/react";

const Write = () => {

  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  const [files, setFiles] = useState<PreviewFile[]>([]);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className='bg-concrete-100'>
      <div className='flex flex-col items-center bg-white'>
        <div className='w-[85%]'>

          <div>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()}/>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside style={thumbsContainer}>
              {thumbs}
            </aside>
          </div>

          <div className='containerQuill'>
            <ReactQuill
              ref={quillRef}
              className='quillEditor'
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
            />
          </div>
          <div>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Write



//Este codigo solo lo  convierte de html a texto sin formato usar en home
// const getText = (html: string) => {
//   const doc = new DOMParser().parseFromString(html, 'text/html');
//   return doc.body.textContent;
// }

// console.log('Este es el valor sin parsear: ' + getText(value) 
