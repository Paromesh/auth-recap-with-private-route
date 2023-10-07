import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

    const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    const singInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('Observing current user inside useEffect of AuthProvider ', currentUser);
            setLoading(false);
        })

        return() =>{
            unSubscribe();
        }
    },[])

    const authInfo ={user, loading, createUser, singInWithGoogle, singInUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children:PropTypes.node
}

/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4.access children in the AuthProvider component as children and use the middle of the provider
 */