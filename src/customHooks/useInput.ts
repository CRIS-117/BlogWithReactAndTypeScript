import { useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: any) => {
    setValue(e);
  };
  const reset = () => {
    setValue(initialValue);
  };
  return {
    value,
    setValue,
    handleChange,
    reset
  };
};

export default useInput;