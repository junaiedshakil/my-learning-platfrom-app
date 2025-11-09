import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';

const googleProvider=new GoogleAuthProvider;
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

     const createUser = (email, password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
     };
     const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
     }
     const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
     }
     const signOut=()=>{
        setLoading(true);
        return signOut(auth)
     }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            return()=>{ unSubscribe;
            setLoading(false)
            }
        })
     },[]);

     const authInfo = {
       createUser,
       signInUser,
       signInWithGoogle,
       signOut,
       user,
       loading
     };

    return (
      <div>
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
      </div>
    );
};

export default AuthProvider;