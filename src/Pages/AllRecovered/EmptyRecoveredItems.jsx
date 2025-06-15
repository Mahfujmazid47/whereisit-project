import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const EmptyRecoveredItems = () => {
    return (
        <Fade direction='up' triggerOnce={true}>
                <div className='max-w-7xl mx-auto text-center py-60 flex items-center justify-center'>
                    <div className='space-y-3'>
                        <h1 className='text-purple-400 text-2xl font-bold'>No items of yours has been recovered.</h1>
                        <p className=''>Please Wait .</p>

                        <Link className='p-2 text-white rounded  bg-purple-400 md:px-4 transition-all font-semibold  hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg' to="/myItems">Go to Manage Items</Link>
                    </div>
                </div>
            </Fade>
    );
};

export default EmptyRecoveredItems;