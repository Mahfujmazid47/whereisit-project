import React from 'react';
import Loading from '../../Shared/Loading';
import LostFoundItemsCard from '../../Shared/LostFoundItemsCard';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const LatestFindLostItems = ({items}) => {

    return (
        <div className='max-w-7xl mx-auto mb-14 md:mb-20'>

            <Fade direction='up' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-14 mb-5'>Latest Find <span className='text-purple-400'>& Lost Items</span></h1>
            </Fade>

            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5'>
                    {
                        items.map(item => <LostFoundItemsCard
                            key={item._id}
                            item={item}
                        ></LostFoundItemsCard>)
                    }
                </div>
            

            <div className='flex justify-center items-center'>
                <Link to='/allItems' className='btn mt-4 bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg'>See All</Link>
            </div>
        </div>
    );
};

export default LatestFindLostItems;