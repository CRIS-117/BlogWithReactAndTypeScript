//Style dropzone
export const baseStyle = {
  flex: 1,
  display: 'flex',
  FlexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#dcdcdc',
  borderStyle: 'dashed',
  backgroundColor: '#f8f8f8',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  justifyContent: 'center'
};

export const focusedStyle = {
  borderColor: '#7ECC16'
};

export const acceptStyle = {
  borderColor: '#00e676'
};

export const rejectStyle = {
  borderColor: '#ff1744'
};

//Style Thumbnails
export const thumbsContainer = {
  display: 'flex',
  FlexDirection: 'row',
  FlexWrap: 'wrap',
  marginTop: 16
};

export const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #dcdcdc',
  marginBottom: 8,
  marginRight: 8,
  width: 75,
  height: 75,
  padding: 4,
  BoxSizing: 'border-box'
};

export const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

export const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};