import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';
import { useAppDispatch } from '../redux/hooks';
import { login, logout } from '../redux/slices/auth.slice';
import { notesLogoutCleaning } from '../redux/slices/notes.slice';
import { finishLoading, startLoading } from '../redux/slices/ui.slice';
import Swal from 'sweetalert2';

export const startRegisterEmailPass = (
  email: string,
  password: string,
  name: string,
) => {
  return (dispatch = useAppDispatch()) => {
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
          void Swal.fire('Error', error.message, 'error');
        });
    });
  };
};

export const startLogin = (email: string, password: string) => {
  return (dispatch = useAppDispatch()) => {
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
        });
    });
  };
};
export const startGoogleLogin = () => {
  return (dispatch = useAppDispatch()) => {
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
};

export const logouT = () => {
  return (dispatch = useAppDispatch()) => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(notesLogoutCleaning());
  };
};
