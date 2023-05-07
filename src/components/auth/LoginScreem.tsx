import { Link } from 'react-router-dom';
import { userForm } from '../../hooks/userForm';
import { type MouseEvent, type ChangeEvent } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { startGoogleLogin, startLogin } from '../../actions/auth';
// import { startGoogleLogin } from '../../actions/auth';

export const LoginScreem = () => {
  const { values, handleInputChange } = userForm({
    email: 'wilfred@gmail.com',
    password: '123456',
  });
  const dispatch = useAppDispatch();

  const { email, password } = values;
  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  const handleGoogleLogin = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth_title">Login</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        action=""
        onSubmit={handleLogin}
      >
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
        <button
          className="btn btn-primary btn-block"
          type="submit"
          /* disabled={loading} */
        >
          Login
        </button>

        <div className="auth__social-network">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new acount
        </Link>
      </form>
    </>
  );
};
