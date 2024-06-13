export const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    ['link', 'image'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],         // custom dropdown

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ],
  imageResize: {
    modules: ['Resize', 'DisplaySize', 'Toolbar'],
  },
}


//Use after create the back
// export const modules = (quillRef: RefObject<ReactQuill>) => ({
//   toolbar: {
//     container: [
//       ['bold', 'italic', 'underline', 'strike'],        
//       ['blockquote'],
//       ['link', 'image'],

//       [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
//       [{ 'indent': '-1' }, { 'indent': '+1' }],          

//       [{ 'size': ['small', false, 'large', 'huge'] }],  
//       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//       [{ 'color': [] }, { 'background': [] }],          
//       [{ 'font': [] }],
//       [{ 'align': [] }],

//       ['clean']
//     ],
//     handlers: {
//       image: () => imageHandler(quillRef),
//     }
//   },
//   imageResize: {
//     modules: ['Resize', 'DisplaySize', 'Toolbar'],
//   },
// });