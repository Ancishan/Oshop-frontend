import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            //send verification
            await verifyEmail();
            return userCredential;
    };

    const signIn = async (email, password) =>{
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;

        // check the email verified or not 

        if(!user.emailVerified){
            await signOut(auth);
            throw new Error('Your Email is not verified. please verify Your email');   
        }
        return result;
    };

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = email =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = async () =>{
        setLoading(true);
        return signOut(auth);

    };

    const verifyEmail = () =>{
        if(auth.currentUser){
            return sendEmailVerification(auth.currentUser);
        }
    };

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                getToken(currentUser.email);
            }
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user, 
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword, 
        logOut,
        verifyEmail
    };

    return (
        <AuthContext.Provider value ={authInfo}>{children}</AuthContext.Provider>
    );
};
export default AuthProvider;
