import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

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
        <NavLink className='p-2 btn border-none bg-white shadow-none hover:text-purple-400 hover:bg-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/">Home</NavLink>
    </>

    const links2 = <>
        <NavLink className='p-2 mb-1 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/addItems">Add Lost & Found Item</NavLink>

        <NavLink className='p-2 mb-1 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/allRecovered">All Recovered Items</NavLink>

        <NavLink className='p-2 btn hover:text-white hover:bg-purple-400 md:px-4 border-2 border-purple-400 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/myItems">Manage My Items</NavLink>
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