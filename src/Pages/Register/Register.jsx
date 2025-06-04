import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {

    const [isVisible, setIsVisible] = useState();

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleIsVisible = () => {
        setIsVisible(!isVisible)
    }

    const handleGoogleLogin = () => {
        
    }

    return (
        <div>
            <Fade direction='up' triggerOnce={true}>
            <div className='flex justify-center items-center py-96 h-screen'>
                <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-center mb-4 text-purple-400 text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">

                            {/* Name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input mb-4" placeholder="Name" requipurple />

                            {/* Photo URL  */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input mb-4" placeholder="Photo URL" requipurple />

                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input mb-4" placeholder="Email" requipurple />

                            {/* Password  */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input type={isVisible ? "text" : "password"} name='password' className="input " placeholder="Password" requipurple />

                                <button
                                    type='button'
                                    className='absolute top-1/2 right-7 cursor-pointer'
                                    onClick={handleIsVisible}
                                >
                                    {isVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                                </button>
                            </div>

                            {/* <p className='font-semibold text-purple-500'>{errorMessage}</p> */}

                            <button className="btn mt-4 bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg">Register</button>

                            {/* Google */}
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-purple-400 border-2 md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>

                            <p className='text-center mt-4'>Already have an account? Please <Link className='text-purple-400 underline font-bold' to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </Fade>
        </div>
    );
};

export default Register;