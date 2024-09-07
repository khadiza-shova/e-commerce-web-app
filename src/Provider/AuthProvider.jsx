import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const auth=getAuth(app);

const AuthProvider = ({children}) =>{

    const [user,setUser]= useState(null);
    const [loading,setLoading]=useState(null);
   
   


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
        const unSubscribe =onAuthStateChanged(auth,(user)=>{
            setUser(user);
            console.log("Current User",user);
        });
        return ()=>{
            return unSubscribe();
        }
    },[])

    const googleWithSign=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
   
    const authInfo={user,createUser,signIn,Logout,googleWithSign};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;