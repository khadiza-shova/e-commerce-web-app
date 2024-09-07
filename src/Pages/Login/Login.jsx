import { Link } from "react-router-dom";
import sideImageLogo from "../../assets/Images/LoginPageLogo.png"
import sideImageS from '../../assets/Images/Login_sideImage.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
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

            // return redirect("/");
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
                                type="text"
                              name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        </div>
                        <div className="form_inner flex flex-col p-1 mt-3">
                            <label htmlFor="">Password</label>
                            <input type="password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)} />
                        </div>
                        <a className='forgetPass' href=''>Forget Password</a>
                        <div className=" checkBox_field">
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">I agree to the <a href="">Terms & Policy</a></span>
                        </div>

                        <button className='barlow-medium2 cartBtn mt-4'>Sign In</button>
                        


                        <div className="flex flex-row gap-14">
                            <button className='barlow-medium2 signIn_btn mt-4'>Sign in with Google</button>
                            <button className='barlow-medium2 signIn_btn mt-4'>Sign in with Apple</button>
                        </div>

                        <p className="HaveANSignIn">Have an Account?  <Link to={'/signUp'}><a href="">Sign Up</a></Link></p>
                    </form>




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