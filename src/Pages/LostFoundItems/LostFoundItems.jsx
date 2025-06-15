import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import LostFoundItemsCard from '../../Shared/LostFoundItemsCard';
import { Fade } from 'react-awesome-reveal';
import NoSearchResult from './NoSearchResult';

const LostFoundItems = () => {
    const allItems = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [items, setItems] = useState(allItems)

    // console.log(searchText)

    const handleSearch = (e, text) => {
        e.preventDefault();
        const searchedItems = allItems.filter(
            item =>
                item.title.toLowerCase().split(' ').includes(text.toLowerCase()) ||
                item.location.toLowerCase().split(' ').includes(text.toLowerCase())
        );


        // console.log(searchedItems)
        setItems(searchedItems)

        if (searchText == '') {
            setItems(allItems)
        };

    };



    return (
        <div className='max-w-7xl mx-auto my-14 md:my-20'>

            <Fade direction='up' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-14 mb-5'>All Lost &<span className='text-purple-400'> Find Items</span></h1>
            </Fade>

            <Fade direction='up' triggerOnce={true}>
                <form onSubmit={(e) => {
                    handleSearch(e, searchText)
                }} className='flex items-center justify-center gap-0'>
                    <input
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        type="text"
                        placeholder="Search Your Item here"
                        className="input w-1/2 rounded-l-full " />

                    <input
                        type="submit"
                        value="Search"
                        className='btn bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg rounded-r-full' />
                </form>
            </Fade>

            <Fade direction='up' triggerOnce={true}>
                <>
                    {
                        items.length < 1 && searchText !== "" ?

                            <Fade direction='up' triggerOnce={true}>
                                <NoSearchResult searchTerm={searchText} />
                            </Fade>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5'>
                                {
                                    items.map(item => <LostFoundItemsCard
                                        key={item._id}
                                        item={item}
                                    ></LostFoundItemsCard>)
                                }
                            </div>
                    }
                </>
            </Fade>
        </div>
    );
};

export default LostFoundItems;