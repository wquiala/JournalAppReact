import { Link } from 'react-router-dom';
import { userForm } from '../../hooks/userForm';
import { type MouseEvent, type ChangeEvent } from 'react';
import Swal from 'sweetalert2';

import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/auth.slice';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebaseConfig';
import { finishLoading, startLoading } from '../../redux/slices/ui.slice';
// import { startGoogleLogin } from '../../actions/auth';

export const LoginScreem = () => {
  const { values, handleInputChange } = userForm({
    email: 'wilfred@gmail.com',
    password: '123456',
  });
  const dispatch = useAppDispatch();
  /*   const { loading } = useAppSelector((state) => state.uiReducer);
   */
  const { email, password } = values;
  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startLoading());
    dispatch(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(login({ uid: user.uid, name: user.displayName }));
          dispatch(finishLoading());

          // ...
        })
        .catch((error) => {
          void Swal.fire('Error', error.message, 'error');

          /* const errorCode = error.code;
          const errorMessage = error.message; */
        });
    });
  };

  const handleGoogleLogin = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(login({ uid: user.uid, name: user.displayName }));
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        /* const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ... */
      })
      .catch((error) => {
        void Swal.fire('Error', error.message, 'error');
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
