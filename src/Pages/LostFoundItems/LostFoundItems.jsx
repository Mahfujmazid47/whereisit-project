import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import LostFoundItemsCard from '../../Shared/LostFoundItemsCard';
import { Fade } from 'react-awesome-reveal';
import NoSearchResult from './NoSearchResult';
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineSearchOff } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";

const LostFoundItems = () => {
    const allItems = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [items, setItems] = useState(allItems);
    const [sortOption, setSortOption] = useState('');

    // Search handler
    const handleSearch = (e, text) => {
        e.preventDefault();
        const searchedItems = allItems.filter(
            item =>
                item.title.toLowerCase().split(' ').includes(text.toLowerCase()) ||
                item.location.toLowerCase().split(' ').includes(text.toLowerCase()) ||
                item.location.toLowerCase().split(',').includes(text.toLowerCase()) ||
                item.location.toLowerCase().includes(text.toLowerCase())
        );

        setItems(text === '' ? allItems : searchedItems);
    };

    // Sort handler
    const handleSort = (option) => {
        let sortedItems = [...items];

        if (option === 'all') {
            sortedItems = allItems;
        }

        if (option === 'asc') {
            sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        else if (option === 'desc') {
            sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        else if (option === 'lost') {
            sortedItems = allItems.filter(item => item.type.toLowerCase() === 'lost');
        }
        else if (option === 'found') {
            sortedItems = allItems.filter(item => item.type.toLowerCase() === 'found');
        }

        setSortOption(option);
        setItems(sortedItems);
    };

    return (
        <div className='max-w-7xl mx-auto py-14 md:py-20'>
            <h1 data-aos="fade-up" className='text-center text-3xl md:text-4xl font-bold md:mb-14 mb-5'>
                All Lost &<span className='text-purple-400'> Found Items</span>
            </h1>

            {/* Search and Sort Controls */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 mb-6" data-aos="fade-up" data-aos-delay="200">
                <form
                    onSubmit={(e) => handleSearch(e, searchText)}
                    className='flex items-center gap-0'
                >
                    <input
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        type="text"
                        placeholder="Search Your Item here"
                        className="input w-60 md:w-80 rounded-l-full focus:ring-2 focus:ring-purple-300 border-purple-500 focus:outline-none"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className='btn bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:scale-105 active:scale-95 hover:shadow-lg rounded-r-full'
                    />
                </form>

                <select
                    value={sortOption}
                    onChange={(e) => handleSort(e.target.value)}
                    className="select select-bordered border-purple-500 rounded-full w-56 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
                >
                    <option value="">
                        <FaListUl className="inline mr-2 text-purple-500" />
                        Sort By
                    </option>
                    <option value="all">
                        <MdOutlineSearchOff className="inline mr-2 text-gray-500" />
                        All Items
                    </option>
                    <option value="asc">
                        <FaSortAmountUp className="inline mr-2 text-green-500" />
                        Date (Ascending)
                    </option>
                    <option value="desc">
                        <FaSortAmountDown className="inline mr-2 text-red-500" />
                        Date (Descending)
                    </option>
                    <option value="lost">
                        <GiBoxUnpacking className="inline mr-2 text-orange-500" />
                        Lost Items
                    </option>
                    <option value="found">
                        <GiBoxUnpacking className="inline mr-2 text-blue-500" />
                        Found Items
                    </option>
                </select>

            </div>

            {/* Items List */}
            <div data-aos="fade-up" data-aos-delay="400">
                {items.length < 1 && searchText !== "" ? (
                    <Fade direction='up' triggerOnce={true}>
                        <NoSearchResult searchTerm={searchText} />
                    </Fade>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-5'>
                        {items.map(item => (
                            <LostFoundItemsCard key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LostFoundItems;
