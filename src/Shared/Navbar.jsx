import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useTheme } from '../ThemeContext/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
    const { user, logoutUser } = useAuth();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
    }

    const links = <>
        <NavLink className='p-2 font-semibold border-none  shadow-none hover:text-purple-400 hover: md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/">Home</NavLink>

        <NavLink className='p-2 font-semibold border-none  shadow-none hover:text-purple-400 hover: md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/allItems">Lost & Found Items</NavLink>

        <NavLink className='p-2 font-semibold border-none  shadow-none hover:text-purple-400 hover: md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/contactDetails">Contact details</NavLink>

        <NavLink className='p-2 font-semibold border-none  shadow-none hover:text-purple-400 hover: md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/aboutUs">About us</NavLink>

        <NavLink className='p-2 font-semibold border-none  shadow-none hover:text-purple-400 hover: md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/terms">Terms & Conditions</NavLink>
    </>

    const links2 = <>
        <NavLink className='p-2 mb-1 font-semibold hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/addItems">Add Lost & Found Item</NavLink>

        <NavLink className='p-2 mb-1 font-semibold hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/allRecovered">All Recovered Items</NavLink>

        <NavLink className='p-2 font-semibold hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/myItems">Manage My Items</NavLink>
    </>

    return (
        // 
        <div className={
        theme === "dark"
          ? "lg:px-20 fixed top-0 left-0 w-full z-50" // Dark theme হলে
          : "lg:px-20 bg-gradient-to-r from-purple-100 to-purple-200 fixed top-0 left-0 w-full z-50" // Light theme হলে
      }>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center md:gap-1'>
                        <div>
                            <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/18966/18966628.png" alt="" />
                        </div>
                        <Link to="/" className="text-xl md:text-2xl font-bold   "><span className='text-purple-400'>Where</span>IsIt</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-2">


                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="dark"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />

                        {/* sun icon */}
                        <svg
                            className="swap-off w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    {
                        user ?

                            <>

                                <div className='flex items-center gap-1'>
                                    <div className="tooltip hover:tooltip-open tooltip-bottom cursor-pointer" data-tip={user.displayName}>
                                        <div className='p-1'>
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="">
                                                    <img className='w-10 h-10 object-contain rounded-full' src={user.photoURL} alt="" />
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                    {links2}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={handleLogOut} className='p-2 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg'>Logout</button>
                                </div>
                            </>

                            :
                            <>
                                <NavLink className='p-2 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/login">Login</NavLink>

                                <NavLink className='p-2 btn bg-purple-400 text-white md:px-4 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/register">Register</NavLink>
                            </>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;