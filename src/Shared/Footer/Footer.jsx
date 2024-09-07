import FooterLogo from '../../assets/Images/Logo2.png';
// import { FiFacebook } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='footer flex p-14 mt-10'>
                <div className='grid grid-cols-5'>

                    <div className='col-span-2'>
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className='col-span-1 '>
                        <h2 className="barlow-semibold">About Us</h2>
                        <div className="barlow-medium grid gap-y-1.5  mt-2">
                            <h3>Master Plan</h3>
                            <h3>Job</h3>
                            <h3>Invest</h3>
                            <h3>PressRoom</h3>
                            <h3>Blog</h3>
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className="barlow-semibold">Explore EEVE</h2>
                        <div className="barlow-medium grid gap-y-1.5 mt-2">

                            <h3>Unlock My Robot Power</h3>
                            <h3>StratLight</h3>
                            <h3>Robot Platform</h3>
                            <h3>EEVE Roadmap</h3>
                        </div>

                    </div>
                    <div className='col-span-1'>
                        <h2 className='barlow-semibold'>Community And Support</h2>
                        <div className="barlow-medium grid gap-y-1.5 mt-2">
                            <h3>Willow X Community</h3>
                            <h3>Developer & Maker Access</h3>
                            <h3>Special Cases</h3>

                        </div>
                    </div>
                </div>

            <div className='line'></div>
           </div>
     
       
    );
};

export default Footer;