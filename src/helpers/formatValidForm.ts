import validator from 'validator';
import { uiRemoveError, uiSetError } from '../redux/slices/ui.slice';
import { useAppDispatch } from '../redux/hooks';

export const isFormValid = (
  name: string,
  email: string,
  password: string,
  password2: string,
) => {
  return (dispatch = useAppDispatch()) => {
    if (name.trim().length === 0) {
      dispatch(
        uiSetError({
          loading: false,
          errorMsg: 'El nombre debe tener caractares',
        }),
      );
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(
        uiSetError({
          loading: false,
          errorMsg: 'Email invalido',
        }),
      );
      return false;
    } else if (password !== password2) {
      dispatch(
        uiSetError({
          loading: false,
          errorMsg: 'Pass iguales',
        }),
      );
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };
};
