import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-16 '>
                <figure>
                    <img className='max-w-8/12 mx-auto' src="https://img.freepik.com/premium-vector/download-error-concept-vector-illustration_106788-3956.jpg?ga=GA1.1.1819153903.1738087789&semt=ais_items_boosted&w=740" alt="Error" />
                </figure>
                <div className='text-center space-y-3'>
                    <h1 className='text-3xl text-purple-500 font-bold'>404 - Page not found</h1>
                    <p>Oops! The page you are looking for doesn't exist.</p>
                    <NavLink to="/"><button className='btn bg-purple-400 text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg'>
                        Go to Home
                    </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;