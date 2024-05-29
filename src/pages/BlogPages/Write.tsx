import {
  useState,
  useEffect,
  useMemo,
} from 'react';

import { IFile } from '../../models';

import { useInput } from '../../customHooks'

import { categories } from '../../utils/data/categories';

import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react'
import { modules } from '../../modules/quillModules';

// Register the image resizing module with Quill
Quill.register('modules/imageResize', ImageResize);

import { useDropzone } from 'react-dropzone'
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

import {
  Input,
  Autocomplete,
  AutocompleteItem,
  Button
} from "@nextui-org/react";

const validate = (val: string) => {
  console.log(val);
  console.log(categories.some(c => c.id === Number(val)));
  return categories.some(c => c.id === Number(val));
};

const Write = () => {

  const valueQuill = useInput('');
  const valueAutocomplete = useInput('');

  const [files, setFiles] = useState<IFile[]>([]);

  const [touched, setTouched] = useState(false);

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
        preview: URL.createObjectURL(file),
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
    <div className='flex flex-col'>
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
      <small className='font-Kanit-Light text-xs'>{file.name}</small>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className='bg-concrete-100'>
      <div className='flex flex-col items-center'>
        <div className='w-[85%] bg-white p-10 my-10'>
          <div className='w-full bg-mindaro-400 p-5 mb-10'>
            <b className='font-Kanit-Bold text-2xl text-concrete-800 lg:text-5xl'>Explora. Escribe. Conquista.</b>
            <p className='font-Kanit-Light leading-tight text-concrete-700 lg:text-2xl'>"Sumérjase en nuestro espacio donde sus palabras cobran vida. Comparte tus ideas, inspira a otros y deja tu huella en el mundo digital. Tu historia comienza aquí".</p>
          </div>

          <form action="">
            <div className='mb-10'>
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p className='font-Kanit-Light'>Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos</p>
              </div>
              <aside style={thumbsContainer}>
                {thumbs}
              </aside>
            </div>

            <div className='mb-10'>
              <Input
                isRequired
                size='sm'
                type="text"
                label="Título"
                variant='underlined'
                placeholder="Ingresa el título"
                errorMessage='Complete este campo.'
                labelPlacement='outside'
                classNames={{
                  base: 'font-Kanit-Light',
                  label: 'font-Kanit-Light text-base',
                  // inputWrapper: 'border-sulu-500 hover:border-sulu-300',
                  errorMessage: 'font-Kanit-Light'
                }}
              />
            </div>

            <div className='containerQuill mb-10'>
              <ReactQuill
                className='quillEditor'
                theme="snow"
                value={valueQuill.value}
                onChange={valueQuill.handleChange}
                modules={modules}
              />
            </div>

            <div className='mb-10'>
              <Autocomplete
                variant='underlined'
                label="Categoría de tu publicación"
                placeholder='Selecciona una categoría'
                className="max-w-xs"
                size='lg'
                labelPlacement='outside'
                errorMessage={validate(valueAutocomplete.value) || !touched ? "" : "Tiene que ser una de las opciones ya establecidas"}
                isInvalid={validate(valueAutocomplete.value) || !touched ? false : true}
                defaultItems={categories}
                selectedKey={valueAutocomplete.value}
                onSelectionChange={valueAutocomplete.handleChange}
                onClose={() => setTouched(true)}
                classNames={{
                  base: 'font-Kanit-Light',
                  popoverContent: 'font-Kanit-Light',
                }}
              >
                {categories.map((category) => (
                  <AutocompleteItem key={category.id} value={category.value}>
                    {category.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>

            <div className='flex gap-4'>
              <Button
                radius='none'
                className='font-Kanit-Medium text-white bg-sulu-500'
              >
                Publicar
              </Button>
              <Button
                radius='none'
                variant='bordered'
                className='font-Kanit-Medium text-sulu-500 border-sulu-500'
              >
                Cancelar
              </Button>
            </div>
          </form>

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
