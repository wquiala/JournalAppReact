import { Link } from 'react-router-dom';
import { userForm } from '../../hooks/userForm';
import { type ChangeEvent } from 'react';
import validator from 'validator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { uiRemoveError, uiSetError } from '../../redux/slices/ui.slice';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { login } from '../../redux/slices/auth.slice';

export const RegisterScreem = () => {
  const { handleInputChange, values } = userForm({
    name: 'Wilfre',
    email: 'wilfred@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = values;

  const dispatch = useAppDispatch();
  const { errorMsg } = useAppSelector((state) => state.uiReducer);

  const handleRegister = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredencial) => {
            await updateProfile(userCredencial.user, {
              displayName: name,
            });
            dispatch(
              login({
                name: userCredencial.user.displayName,
                uid: userCredencial.user.uid,
              }),
            );
          })
          .catch((error) => {
            console.log(error);
            /* const errorCode = error.code;
      const errorMessage = error.message; */
            // ..
          });
      });
    }
  };

  const isFormValid = () => {
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
  return (
    <>
      <h3 className="auth_title">Register</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        action=""
        onSubmit={handleRegister}
      >
        {errorMsg !== null && (
          <div className="auth_alert_error">{errorMsg}</div>
        )}
        <input
          className="auth_input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already registered
        </Link>
      </form>
    </>
  );
};
