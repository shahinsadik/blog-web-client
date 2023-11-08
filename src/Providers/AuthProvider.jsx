import { useState, useEffect, createContext } from "react";
import { auth } from "./../Config/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

export const AuthContext = createContext();


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, SetISLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const crateUser = (email, password) => {
    SetISLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    SetISLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    SetISLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    SetISLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    SetISLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      SetISLoading(false);
     
    });
    return () => {
      return subscribe;
    };
  }, []);

  const authInfo = {
    user,
    isLoading,
    crateUser,
    loginUser,
    logOut,
    profileUpdate,
    signInGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
