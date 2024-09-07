
import { Link } from "react-router-dom";
import sideImageLogo from "../../assets/Images/LoginPageLogo.png"
import sideImageS from '../../assets/Images/Login_sideImage.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

    const {createUser}=useContext(AuthContext);

    const [firstName,setFirstName]=useState([]);
    const [lastName,setLastName]=useState([]);
    const [email,setEmail]=useState([]);
    const [pass,setPass]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();

        createUser(email,pass)
        .then(result=>{
            console.log(result.user);
            window.location.replace('/');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


  

    return (

        <div className="grid grid-cols-2">
        <div className="border">
            <div className="loginForm p-4 ">
                <h2 className="text-center">Welcome To</h2>

                <h3 className="barlow-bold text-center">Furnis <span className="logo_color">Flex</span></h3>

                <p style={{ color: "#707070", textAlign: "center", fontSize: "15px",marginTop:"5px" }}>Signup for purchase your desire products</p>

                <form onSubmit={handleSubmit} action="">
                    <div className=" grid grid-cols-2 gap-2 mt-3">
                        <div className=" form_inner flex flex-col p-1">
                            <label htmlFor="">First Name(Optional)</label>
                            <input type="text" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                        </div>

                        <div className="form_inner flex flex-col p-1 mb-0">
                            <label htmlFor="">Last Name(Optional)</label>
                            <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>

                    </div>

                    <div className="form_inner flex flex-col p-1 mt-3">
                        <label htmlFor="">Email Address</label>
                        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form_inner flex flex-col p-1 mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" value={pass}  onChange={(e)=>setPass(e.target.value)}/>
                    </div>
                    <div className=" checkBox_field">
                        <input type="checkbox" name="" id="" />
                        <span className="ml-2">I agree to the <a href="">Terms & Policy</a></span>
                    </div>

                    <button className='barlow-medium2 cartBtn mt-4'>Sign Up</button>



                    <div className="flex flex-row gap-14">
                        <button className='barlow-medium2 signIn_btn mt-4'>Sign in with Google</button>

                        <button className='barlow-medium2 signIn_btn mt-4'>Sign in with Apple</button>
                    </div>

                    <p className="HaveANSignIn">Have an Account?  <Link to={"/login"}><a href="">Sign In</a></Link></p>
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

export default SignUp;