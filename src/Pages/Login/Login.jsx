import { Link } from "react-router-dom";
import sideImageLogo from "../../assets/Images/LoginPageLogo.png"
import sideImageS from '../../assets/Images/Login_sideImage.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaAppleAlt, FaGoogle } from "react-icons/fa";
const Login = () => {

    const {signIn}= useContext(AuthContext);

    const [email,setEmail]=useState([]);
    const [pass,setPass]=useState([]);

    const handleLogin =(e)=>{
        e.preventDefault();
        console.log(email,pass);

        signIn(email,pass)

        .then(result=>{
            console.log(result.user);
            console.log("Sign In",result.user);            
            window.location.replace('/');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="grid grid-cols-2">
            <div className="border">
                <div className="RegiForm p-4 ">
                    <h2 className="barlow-medium2">Welcome Back !</h2>
                    <p className="barlow-regular">Enter your Credentials to access your account</p>


                    <form onSubmit={handleLogin} action="">
                        <div className="form_inner flex flex-col p-1 mt-10">
                            <label htmlFor="">Email Address</label>
                            <input 
                                type="text" placeholder="Enter Your Email"
                              name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

                        </div>
                        <div className="form_inner flex flex-col p-1 mt-3">
                            <label htmlFor="">Password</label>
                            <input type="password" name="pass" placeholder="Enter Your Password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
                        </div>
                        <div className='forgetPass'>
                        <a  href=''>Forget Password</a>
                        </div>
                        <div className=" checkBox_field">
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">I agree to the <a href="">Terms & Policy</a></span>
                        </div>

                        <button className='barlow-medium2 cartBtn mt-4'>Sign In</button>
                        


                    </form>
                        {/* Social Icon  */}

                            <div className="flex flex-row gap-14">
                                <button className='barlow-medium2 signIn_btn mt-4'> <div className="flex justify-center items-center">
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

                            <p className="HaveANSignIn">Have an Account?  <Link to={'/signUp'}><a href="">Sign Up</a></Link></p>

                </div>
            </div>

            <div style={{ backgroundImage: `url(${sideImageS})`, width: "575px", backgroundSize: "cover", backgroundPosition: "center", height: "700px" }}>
                <div className="logo_content">
                    <div className="">
                        <img className="ml-20" src={sideImageLogo} alt="" />
                        <p className="logo_content_sutitle">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;