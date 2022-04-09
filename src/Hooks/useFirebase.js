import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  const SignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return { user, signWithGoogle, SignOut };
};

export default useFirebase;
