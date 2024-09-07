import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) =>{

    const [user,setUser]= useState(null);
    const [loading,setLoading]=useState(true);

    const auth=getAuth(app);
   


    // Create USer 
    const createUser =(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    // Sign in User 

    const signIn=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const Logout =()=>{
        return signOut(auth)
    }

    // Current User 
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
            console.log("Current User",user);
        })
    },[])

   
    const authInfo={user,createUser,signIn,Logout};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;