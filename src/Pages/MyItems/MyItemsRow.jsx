import axios from 'axios';
import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import UpdateItems from './UpdateItems';

const MyItemsRow = ({ index, item, setMyItems, myItems }) => {

    const { _id, title, image, category, email, type, date } = item;

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // deleting from db 
                axios.delete(`https://b11a11-whereisit-server-side.vercel.app/items/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount) {
                            const remainingItem = myItems.filter(item => item._id !== id);
                            setMyItems(remainingItem)


                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Post has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire("Failed!", "Something went wrong.", "error");
                    })


            }
        });
    };

    const handleModal = (id) => {
        document.getElementById(`my_modal_${id}`).showModal()
    }

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
                {type}

            </td>
            <td>{date}</td>
            <td>{email}</td>
            <th>

                <div className="join">

                    <Link to={`/items/${_id}`}>
                        <button className="btn rounded-sm join-item text-white bg-purple-400 md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg"><FaEye size={18} /> </button>
                    </Link>

                    {/* Modal  */}
                    <button className="btn rounded-sm join-item text-white bg-black md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg" onClick={() => handleModal(_id)}><FaPencil size={18} /></button>
                    <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            {/* <p className="py-4">Bids for this item : <span className='text-2xl text-red-400'>{title}</span> </p> */}

                            <UpdateItems
                                item={item}
                            ></UpdateItems>

                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <form method="dialog">
                                    <button className="btn rounded-full bg-purple-400 text-white btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
                                </form>
                            </div>
                        </div>
                    </dialog>



                    {/* <Link to={`/updateItem/${_id}`}>
                        <button className="btn rounded-sm join-item text-white bg-black md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg"><FaPencil size={18} /> </button>
                    </Link> */}
                    <button onClick={() => handleDelete(_id)} className="btn rounded-sm join-item text-white bg-red-400 md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg"><FaTrash size={18} /> </button>
                </div>
            </th>
        </tr>
    );
};

export default MyItemsRow;