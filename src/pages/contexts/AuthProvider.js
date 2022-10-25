import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config'


export const AuthContext = createContext();
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    // state for details info
    const [details, setDetails] = useState({
        id: 0,
        title: '',
        desc:'',
        img:''
    });
    // user info state
    const [user, setUser] = useState(null);
    // loading state 
    const [loading, setLoading] = useState(true);
    // const email signUp
    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email login 
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google login
    const googleProvider=new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // facebook login
    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }
    // sign Out 
    const logOut = () => {
        signOut(auth)
            .then(() => { })
        .catch(()=>{})
    }
    // user monitoring or store user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    // selected place setting function here
    const userDetails={details,user,loading,googleSignIn,githubSignIn,emailSignUp,emailLogin,logOut, setDetails}
    return (
        <AuthContext.Provider value={userDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;