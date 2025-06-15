import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import RecoverModal from './RecoverModal';

const PostDetails = () => {
    const item = useLoaderData();
    // console.log(item)
    const { _id, title, image, type, date, location, description, email, name, category, status } = item;

    const [itemStatus, setItemStatus] = useState(status);

    const handleModal = (id) => {
        document.getElementById(`my_modal_${id}`).showModal()
    }

    return (
        <div className="max-w-7xl mx-auto my-14 md:my-20 px-4">
            <Fade direction="up" triggerOnce={true}>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold md:my-14 my-5">
                    Post <span className="text-purple-400">Details</span>
                </h1>
            </Fade>

            <Fade direction="up" triggerOnce={true}>
                <div className="card lg:card-side bg-base-100 shadow-md rounded-lg overflow-hidden">
                    <figure className="md:w-5/12 lg:w-[30%] m-auto object-contain">
                        <img
                            className=""
                            src={image}
                            alt={title}
                        />
                    </figure>

                    <div className="card-body space-y-4 lg:border-l border-base-300">
                        <h2 className="card-title text-purple-400 text-2xl">{title}</h2>

                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="font-semibold">Type:</span>
                            <div className="badge bg-purple-400 text-white font-semibold">{type}</div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="font-semibold">Category:</span>
                            <div className="badge bg-purple-400 text-white font-semibold">{category}</div>
                        </div>

                        <p>
                            <span className="font-semibold">Description: </span>
                            {description}
                        </p>

                        <p>
                            <span className="font-semibold">Location: </span>
                            {location}
                        </p>

                        <p>
                            <span className="font-semibold">Date: </span>
                            {date}
                        </p>

                        <p>
                            <span className="font-semibold">Contact Name: </span>
                            {name}
                        </p>

                        <div>
                            <span className="font-semibold">Contact Email: </span>
                            <p className="font-bold text-purple-600">
                                {email}
                            </p>
                        </div>

                        <div className="card-actions justify-end pt-3">
                            {
                                itemStatus ?

                                    <button disabled className='btn mt-4 md:px-4'>Recovered</button>

                                    :

                                    <div>
                                        <button className="btn mt-4 bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg" onClick={() => handleModal(_id)}>
                                            {
                                                type == 'Lost' ? 'Found This!' : 'This is Mine!'
                                            }
                                        </button>

                                        <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">

                                                {/* <p className="py-4">Bids for this item : <span className='text-2xl text-red-400'>{title}</span> </p> */}

                                                {/* <UpdateItems
                                                    item={item}
                                                ></UpdateItems> */}

                                                <RecoverModal
                                                item={item}
                                                setItemStatus={setItemStatus}
                                                ></RecoverModal>

                                                <div className="modal-action">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <form method="dialog">
                                                        <button className="btn rounded-full bg-purple-400 text-white btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                    </div>



                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PostDetails;