import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const EmptyMyItems = () => {
    return (
        <Fade direction='up' triggerOnce={true}>
                <div className='max-w-7xl mx-auto text-center py-60 flex items-center justify-center'>
                    <div className='space-y-3'>
                        <h1 className='text-purple-400 text-2xl font-bold'>You don't Add a Item yet.</h1>
                        <p className=''>Please Add a Item</p>

                        <Link className='p-2 text-white rounded  bg-purple-400 md:px-4 transition-all font-semibold  hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/addItems">Go to Add Items</Link>
                    </div>
                </div>
            </Fade>
    );
};

export default EmptyMyItems;