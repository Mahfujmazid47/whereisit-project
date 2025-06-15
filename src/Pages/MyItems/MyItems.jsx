import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import MyItemsRow from './MyItemsRow';
import EmptyMyItems from './EmptyMyItems';

const MyItems = () => {

    const {user} = useAuth();
    const allItems = useLoaderData();
    const [myItems, setMyItems] = useState([]);
    

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
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:my-14 my-5'>My <span className='text-purple-400'>Items</span></h1>
            </Fade>

            <Fade direction='right' triggerOnce={true}>
                <div className="overflow-x-auto border-r border-l border-b border-base-300 shadow-sm">
                    <table className="table w-full min-w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                    myItems.map((item, index) => <MyItemsRow
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        myItems={myItems}
                                        setMyItems={setMyItems}
                                    ></MyItemsRow>)
                                }

                        </tbody>

                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default MyItems;