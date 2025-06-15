import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const RecoverCard = ({item}) => {

    const { _id, title, image, recoveryEmail, status, recoveryDate, recoveryLocation } = item;

    return (
        <div>
            <Fade direction='up' triggerOnce={true}>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-96 h-88 rounded-lg object-contain'
                            src={image}
                            alt={title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">{status}</div>
                        </h2>
                        <p>Recovery Date: <span className='font-bold'>{recoveryDate}</span></p>
                        <p>Recovered Location: <span className='font-bold'>{recoveryLocation}</span></p>
                        <p>Recovery Email: <span className='font-bold'>{recoveryEmail}</span></p>
                        <div className="card-actions justify-end">
                            <Link to={`/items/${_id}`} className='btn mt-4 bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg'>View Details</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default RecoverCard;