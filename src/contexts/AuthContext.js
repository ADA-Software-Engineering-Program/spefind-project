import React, { useContext, useEffect, useState, createContext } from 'react'

import {auth} from '../firebase/firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"


const AuthContext = createContext()




export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(JSON.parse( localStorage.getItem( 'user' ) ) || null);
  const [loading, setLoading] = useState(true);
  // Signs up on firebase with email and password.
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  //user login func
  function logIn( email, password ) {
            return signInWithEmailAndPassword(auth, email, password )
        }


        //user logout
        function logOut() {
            return signOut(auth);
        }








  // Sets the user to the object and we can keep track if logged in or not.
  // useEffect() lets react know to run after render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      localStorage.setItem('user', JSON.stringify(user))
    } );
    
    return () => {
      unsubscribe();
  }
  }, [currentUser]);
  // Export the value for other functions to call it.
  const value = {
    currentUser,
    signup,
    logIn,
    logOut
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// export function useAuth();
// return useContext();
export const useAuth = () => {
  return useContext(AuthContext);
};