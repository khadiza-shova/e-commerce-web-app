import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaAppleAlt, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {

    const {googleWithSign } = useContext(AuthContext);

    const handleGoogle=()=>{
        googleWithSign()
        .then((result=>{
            window.location.replace('/');
            console.log(result.user);
        }))
        .catch(error=>{
            console.log(error.message);
        })

    }


    return (
        <div className="flex flex-row gap-14">
        <button onClick={handleGoogle} className='barlow-medium2 signIn_btn mt-4'> <div className="flex justify-center items-center">
            <span className="icon"><FaGoogle /></span>
            <span className="ml-1">Sign in with Google</span>
        </div> </button>

        <button className='barlow-medium2 signIn_btn mt-4'>

            <div className="flex justify-center items-center">

                <span className="icon"><FaAppleAlt /></span>
                <span className="ml-1">Sign in with Apple</span>
            </div>


        </button>
    </div>

    );
};

export default SocialLogin;