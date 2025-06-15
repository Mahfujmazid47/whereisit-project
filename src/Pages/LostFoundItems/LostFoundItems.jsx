import React from 'react';
import { useLoaderData } from 'react-router';
import LostFoundItemsCard from '../../Shared/LostFoundItemsCard';
import { Fade } from 'react-awesome-reveal';

const LostFoundItems = () => {
    const items = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto my-14 md:my-20'>

            <Fade direction='up' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-14 mb-5'>All Lost &<span className='text-purple-400'> Find Items</span></h1>
            </Fade>

            <Fade direction='up' triggerOnce={true}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5'>
                    {
                        items.map(item => <LostFoundItemsCard
                            key={item._id}
                            item={item}
                        ></LostFoundItemsCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default LostFoundItems;