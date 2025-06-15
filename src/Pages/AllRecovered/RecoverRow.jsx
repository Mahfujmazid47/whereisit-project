import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const RecoverRow = ({ item,index }) => {

    const { _id, title, image, category, email, recoveryLocation, recoveryDate } = item;

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <figure>
                        <img className='h-12 w-12 rounded-2xl' src={image} alt={title} />
                    </figure>
                    <div>

                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {recoveryLocation}

            </td>
            <td>{recoveryDate}</td>
            <td>{email}</td>
            <th>

                <div className="join">

                    <Link to={`/items/${_id}`}>
                        <button className="btn rounded-sm join-item text-white bg-purple-400 md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg"><FaEye size={18} /> </button>
                    </Link>

                </div>
            </th>
        </tr>
    );
};

export default RecoverRow;