import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {

    const links = <>
        <Link className='p-2 font-medium hover:text-purple-400 hover:bg-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/contactDetails">Contact details</Link>

        <Link className='p-2 font-medium hover:text-purple-400 hover:bg-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/aboutUs">About us</Link>

        <Link className='p-2 font-medium hover:text-purple-400 hover:bg-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/terms">Terms & Conditions</Link>

    </>

    return (
        <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-purple-300 to-purple-500 text-primary-content p-10">
            <aside>


                <div className='flex items-center md:gap-1'>
                    <div>
                        <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/18966/18966628.png" alt="" />
                    </div>
                    <Link to="/" className="text-xl text-white md:text-2xl font-bold   "><span className='text-purple-700'>Where</span>IsIt</Link>
                </div>

                <div className='py-3 text-white'>
                    {links}
                </div>

                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">

                    <a href='https://www.linkedin.com/in/mahfujmazid' target='_blank'>
                        <FaLinkedin size={25} />
                    </a>
                    <a href='https://github.com/Mahfujmazid47' target='_blank'>
                        <FaGithub size={25} />
                    </a>

                    
                    <a href='https://www.facebook.com/mahfuj.mazid.2024' target='_blank'>
                      <FaFacebook size={25} />
                    </a>


                </div>
            </nav>
        </footer>
    );
};

export default Footer;