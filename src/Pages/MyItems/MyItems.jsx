import React, { Suspense, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import MyItemsRow from './MyItemsRow';
import EmptyMyItems from './EmptyMyItems';
import Loading from '../../Shared/Loading';
import MyItemsList from './MyItemsList';
import { myItemsPromise } from '../../API/itemsAPI';



const MyItems = () => {

    const {user} = useAuth();
    const allItems = useLoaderData();
    const [myItems, setMyItems] = useState([]);

    // console.log('token in the user' , user.accessToken);
    

    useEffect(() => {
        const refinedItems = allItems.filter(item => user.email == item.email);
        setMyItems(refinedItems)
    }, [setMyItems,allItems,user]);

    // console.log(myItems)

    if(myItems.length == 0){
        return <EmptyMyItems />
    }

    return (
        <div className='max-w-7xl mx-auto my-14 md:my-20'>
            <Fade direction='left' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:my-14 my-5'>Manage <span className='text-purple-400'>My Items</span></h1>
            </Fade>

            <Suspense fallback={<Loading />}>
            <MyItemsList
            myItemsPromise={myItemsPromise(user.email, user.accessToken)}
            allItems={allItems}
            myItems={myItems}
            setMyItems={setMyItems}
            ></MyItemsList>
            </Suspense>
        </div>
    );
};

export default MyItems;