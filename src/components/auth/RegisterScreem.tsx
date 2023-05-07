import { Link } from 'react-router-dom';
import { userForm } from '../../hooks/userForm';
import { type ChangeEvent } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { isFormValid } from '../../helpers/formatValidForm';
import { startRegisterEmailPass } from '../../actions/auth';

export const RegisterScreem = () => {
  const { handleInputChange, values } = userForm({
    name: 'Wilfre',
    email: 'wilfred@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = values;

  const dispatch = useAppDispatch();

  const handleRegister = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    isFormValid(email, password, name, password2);
    dispatch(startRegisterEmailPass(email, password, name));
  };

  return (
    <>
      <h3 className="auth_title">Register</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        action=""
        onSubmit={handleRegister}
      >
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
