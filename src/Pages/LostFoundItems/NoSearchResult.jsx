import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NoSearchResult = ({ searchTerm }) => {
    return (
        <div className="text-center my-16 flex flex-col items-center justify-center space-y-4">
            <FaSearch className="text-purple-400 text-5xl" />
            <h2 className="text-2xl font-semibold text-purple-400">No results found</h2>
            <p className="text-gray-500 text-sm">
                We couldn’t find any items matching&nbsp;
                <span className="font-semibold text-purple-400">"{searchTerm}"</span>.
            </p>
        </div>
    );
};

export default NoSearchResult;
