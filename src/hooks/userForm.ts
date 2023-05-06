/* eslint-disable @typescript-eslint/ban-types */
import { type ChangeEvent, useState } from 'react';

export const userForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };
  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleInputChange, reset };
};
