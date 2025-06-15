import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import EmptyRecoveredItems from './EmptyRecoveredItems';
import RecoverTable from './RecoverTable';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import RecoverCard from './RecoverCard';

const AllRecovered = () => {

    const { user } = useAuth();
    const allRecoveredItems = useLoaderData();
    console.log(allRecoveredItems)
    const [recoveredItems, setRecoveredItems] = useState([]);
    const [tableFormat, setTableFormat] = useState(true);

    useEffect(() => {
        const refinedItems = allRecoveredItems.filter(item => user.email === item.email);
        setRecoveredItems(refinedItems);
    }, [user, setRecoveredItems, allRecoveredItems]);

    const handleTableFormat = () => {
        setTableFormat(!tableFormat);
    }


    if (recoveredItems.length < 1) {
        return <EmptyRecoveredItems />
    };

    console.log(recoveredItems)

    return (
        <div className='max-w-7xl mx-auto py-20 lg:py-28 h-fit'>
            <div className=' md:flex items-center justify-between'>
                <div>
                    <Fade direction='left' triggerOnce={true}>
                        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-7 mb-5'>All   <span className='text-purple-400'>Recovered Items</span></h1>
                    </Fade>
                </div>

                <div>
                    <button onClick={handleTableFormat}>
                        {!tableFormat ? <GiHamburgerMenu size={24} /> : <TfiLayoutGrid3Alt size={20} />}
                    </button>
                </div>
            </div>

            {/* Recovered Item Table  */}
            {
                tableFormat ?

                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5'>
                            {
                            recoveredItems.map(item => <RecoverCard
                                key={item._id}
                                item={item}
                            ></RecoverCard>)
                        }
                        </div>
                    </>

                    :
                    <RecoverTable
                        recoveredItems={recoveredItems}
                    ></RecoverTable>
            }

        </div>
    );
};

export default AllRecovered;