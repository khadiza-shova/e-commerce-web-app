
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';


const Layout = () => {
    
    const location = useLocation();
    const locationA = location.pathname  == '/signUp' || location.pathname == "/login"

    
    return (
        <div className='w-5/6 mx-auto'>
            {
               !locationA?<Navbar></Navbar>:""
            }
           
            <div className='h-screen-full'>

                <Outlet></Outlet>
            </div>
            {
               !locationA?<Footer></Footer>:""
            }
           
        </div>
    );
};

export default Layout;