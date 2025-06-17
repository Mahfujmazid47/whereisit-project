import React from 'react';
import { Link } from 'react-router';
import 'aos/dist/aos.css';

const LostFoundItemsCard = ({ item }) => {

    const { _id, title, image, type, date, location } = item;

    return (
        
            <div data-aos="fade-up" className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-96 h-88 rounded-lg object-contain'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{type}</div>
                    </h2>
                    <p>{date}</p>
                    <p>{location}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/items/${_id}`} className='btn mt-4 bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg'>View Details</Link>
                    </div>
                </div>
            </div>
        
    );
};

export default LostFoundItemsCard;