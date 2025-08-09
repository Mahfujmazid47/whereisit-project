import React from 'react';
import { motion } from "motion/react"
import 'aos/dist/aos.css';

const Steps = () => {
    return (
         <div className='pb-24 md:pb-30'>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
                
                    <h1 data-aos="fade-down" className='text-center text-3xl md:text-4xl font-bold md:mb-12 mb-10'>
                         <span className='text-purple-400'>How to Use</span> This Platform
                    </h1>
                

                <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                    {/* Left Section: Steps */}
                    
                        <div data-aos="fade-right" className="lg:py-6 lg:pr-16">
                            {/* Step 1 */}
                            <div className="flex mb-6">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        1
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1">
                                    <p className="mb-2 text-lg font-bold text-purple-400">
                                        Register/Login
                                    </p>
                                    <p>Sign in using your email to get access to all features.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex pb-6">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        2
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1">
                                    <p className="mb-2 text-lg font-bold text-purple-400">
                                        Post Lost or Found Item
                                    </p>
                                    <p>Use the form to report a lost or found item with details like image, category, and location.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex mb-6">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        3
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1">
                                    <p className="mb-2 text-lg font-bold text-purple-400">
                                        Browse Listings
                                    </p>
                                    <p>Search through posted items to see if your lost item has been found.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex mb-6">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        4
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1">
                                    <p className="mb-2 text-lg font-bold text-purple-400">
                                        Contact Poster
                                    </p>
                                    <p>If you find a match, reach out using the provided contact info.</p>
                                </div>
                            </div>

                            {/* Step 5 - Success */}
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        ✓
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="mb-2 text-lg font-bold text-purple-400">
                                        Recover or Return Successfully
                                    </p>
                                    <p>Help return the item to its rightful owner and make someone's day!</p>
                                </div>
                            </div>
                        </div>
                    

                    {/* Right Section: Image */}
                    
                        <div data-aos="fade-left">
                            <motion.img
                                className="rounded md:w-8/12 mx-auto lg:w-10/12"
                                src="https://i.ibb.co.com/Kp1hJrMJ/detective-woman-concept-illustration-114360-14822-removebg-preview.png"
                                alt="Lost and Found Steps"

                                animate={{ y: [10, 30, 10] }}
                                transition={{duration: 3, repeat: Infinity }}

                                // className="max-w-[300px] md:h-full h-[200px]  lg:max-w-sm mx-auto rounded-xl"
                            />
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Steps;