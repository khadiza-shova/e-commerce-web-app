import { BiShoppingBag } from "react-icons/bi";
import Logo from '../../../src/assets/Images/Logo.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const {user,Logout}= useContext(AuthContext);
    const handleLogout=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Logout This Account !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want!"
          }).then((result) => {
            if (result.isConfirmed) {
                Logout()
                .then(result=>{
                    console.log(result);
                })
                .catch(error=>{
                    console.log(error.message);
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your Account has been LogOuted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="text-xl">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"> <li >Home</li></Link>
                        <Link to={""}><li>Products</li></Link>
                        <Link to={""}><li>Categories</li></Link>
                        <Link to={""}><li>Custome</li></Link>

                        <Link to={""}><li>Blog</li></Link>
                        {/* {
                            user? "ok": <Link to="/signUp"> <li >Sign Up</li></Link>
                        } */}
                       

                    </ul>
                </div>
                {
                    user?  <div className="navbar-end">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn-circle shoppingCart_icon">
                                <div className="indicator shoppingCart_icon">
                                   
                                    <Link to={"/orderDetails"}>
                                        <BiShoppingBag />
                                    </Link>

                                
                                </div>
                            </div>
                            
                        </div>
                        <div className="dropdown dropdown-end">

                            <button onClick={handleLogout}>
                            <div className="avatar">
                                <div className=" mt-4 ring-primary w-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
                :
<li><Link className="menu" to="/signUp"> <li >Sign Up</li></Link></li>
                }
               
            </div>
        </>
    );
};

export default Navbar;