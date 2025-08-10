import React, { useEffect } from 'react';
import { motion } from "motion/react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="carousel w-full max-h-screen mb-24">

            <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                <div className='lg:p-26 md:p-14 py-8 space-y-0 md:space-y-0 md:flex justify-center items-center rounded-b-xl bg-gradient-to-r from-purple-200 to-purple-400'>
                    <div data-aos="fade-right" className='overflow-hidden'>
                        
                            <h1 className='text-center md:text-left text-3xl md:text-4xl font-bold text-black lg:text-5xl lg:w-3/4 mb-2'><span className='text-purple-500'>Where</span>IsIt</h1>
                            <p className='text-base-400 text-sm text-center md:text-left md:text-base lg:w-3/4 mb-8 md:mb-0 text-black'>Reunite lost treasures and found items effortlessly – your community's dedicated lost and found platform for quick connections.</p>
                        
                    </div>
                    
                        <div data-aos="fade-right">
                            <motion.img
                                src="https://i.ibb.co.com/rWKXsGR/detective-kids-concept-illustration-114360-14825-removebg-preview.png"
                                animate={{ y: [10, 30, 10] }}
                                transition={{duration: 3, repeat: Infinity }}

                                className="max-w-[350px] md:h-full h-[200px]  lg:max-w-sm mx-auto rounded-xl"
                            />
                        </div>
                    
                </div>

                {/* <img className='w-6/12 md:w-8/12 mx-auto rounded-xl' src="https://img.freepik.com/free-vector/detective-kids-concept-illustration_114360-14825.jpg?ga=GA1.1.1819153903.1738087789&semt=ais_items_boosted&w=740" alt="" /> */}

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className='lg:p-26 md:p-14 py-8 space-y-5 md:space-y-0 md:flex justify-center items-center rounded-b-xl bg-gradient-to-r from-red-200 to-red-400 '>
                    <div>
                        <h1 className='text-center md:text-left text-3xl md:text-4xl font-bold lg:text-5xl mb-2 text-black'>Report  <span className='text-red-500'>Lost Items</span></h1>
                        <p className='text-base-400 text-sm text-center md:text-left md:text-base mb-8 md:mb-0 text-black lg:w-3/4'>Quickly report lost items by providing key details, increasing the chances of your cherished belongings being returned by finders.</p>
                    </div>
                    <div>
                        <motion.img
                            // className='w-9/12 mx-auto rounded-xl'
                            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?ga=GA1.1.1819153903.1738087789&semt=ais_items_boosted&w=740"
                            animate={{ y: [10, 30, 10] }}
                            transition={{duration: 3, repeat: Infinity }}

                            className="max-w-[300px] md:h-full h-[200px]  lg:max-w-sm mx-auto rounded-xl shadow-2xl"
                        />

                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className='lg:p-26 md:p-14 py-8 space-y-5 md:space-y-0 md:flex justify-center items-center rounded-b-xl bg-gradient-to-r from-sky-200 to-sky-400'>
                    <div>
                        <h1 className='text-center md:text-left text-3xl md:text-4xl font-bold lg:text-5xl mb-2 text-black'>Browse  <span className='text-sky-500'>Found Items</span></h1>
                        <p className='text-base-400 text-sm text-center md:text-left md:text-base mb-8 md:mb-0 text-black lg:w-3/4'>Explore our Browse Found Items section to quickly view recently submitted belongings and hopefully reunite with your lost possessions.</p>
                    </div>
                    <div>
                        <motion.img
                            // className='w-9/12 md:w-10/12 mx-auto rounded-xl' 
                            src="https://img.freepik.com/premium-vector/file-searching-storage-trending-concept-flat-illustration_720185-1553.jpg?ga=GA1.1.1819153903.1738087789&semt=ais_items_boosted&w=740"
                            animate={{ y: [10, 30, 10] }}
                            transition={{duration: 3, repeat: Infinity }}

                            className="max-w-[300px] md:h-full h-[200px]  lg:max-w-sm mx-auto rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className='lg:p-26 md:p-14 py-8 space-y-5 md:space-y-0 md:flex justify-center items-center rounded-b-xl bg-gradient-to-r from-green-200 to-green-400'>
                    <div>
                        <h1 className='text-center md:text-left text-3xl md:text-4xl font-bold lg:text-5xl mb-2 text-black'>Interact <span className='text-green-600'>to Recover </span></h1>
                        <p className='text-base-400 text-sm text-center md:text-left md:text-base mb-8 md:mb-0 text-black lg:w-3/4'>Engage directly with finders and owners through our platform to securely coordinate the successful recovery of your lost possessions.</p>
                    </div>
                    <div>
                        <motion.img
                            // className='w-9/12 md:w-11/12 mx-auto rounded-xl' 
                            src="https://img.freepik.com/premium-vector/man-woman-solar-panel-concept-solar-energy-vector_174639-59449.jpg?ga=GA1.1.1819153903.1738087789&semt=ais_items_boosted&w=740"
                            animate={{ y: [10, 30, 10] }}
                            transition={{ duration: 3, repeat: Infinity }}

                            className="max-w-[300px] md:h-full h-[200px]  lg:max-w-sm mx-auto rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;