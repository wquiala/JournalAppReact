import { ChangeEvent, useState } from 'react';

export const userForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleInputChange, reset };
};
