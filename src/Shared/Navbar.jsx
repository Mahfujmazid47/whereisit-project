import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink className='p-2 hover:text-purple-400 hover:bg-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/">Home</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
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
                   

                    <>
                        <NavLink className='p-2 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/login">Login</NavLink>

                        <NavLink className='p-2 btn bg-purple-400 text-white md:px-4 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/register">Register</NavLink>
                    </>

                    {/* <div>
                        {user && (
                            <>
                                <div className="dropdown dropdown-hover dropdown-end cursor-pointer">

                                    <div className='p-1'>
                                        <img className='w-10 h-10 object-contain rounded-full' src={user.photoURL} alt="" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li className=' text-sm font-semibold text-center'>{user.displayName}</li>
                                        <li className='pb-2 text-sm font-semibold text-center'>{user.email}</li>
                                        <button onClick={handleLogOut} className='btn bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg'>Log Out</button>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;