import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

/* export const LoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(login({ uid: 12345, name: 'Wilfre' }));
    }, 3500);
  };
}; */
export const startRegisterEmailPass = (
  email: string,
  password: string,
  name: string,
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredencial) => {
      console.log(userCredencial);
      // const user = userCredencial.user;
    })
    .catch((error) => {
      console.log(error);
      /* const errorCode = error.code;
      const errorMessage = error.message; */
      // ..
    });
};
export const startGoogleLogin = () => {
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      console.log(user.displayName, user.uid);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      /* const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ... */
    })
    .catch((error) => {
      console.log(error);
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
