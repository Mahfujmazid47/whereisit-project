import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Fade } from 'react-awesome-reveal';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const UpdateItems = ({ item }) => {

    const { user } = useAuth();
    const { _id, title, image, type, date, location, description, category } = item;

    const [selectedDate, setSelectedDate] = useState(new Date(date));
    const navigate = useNavigate();


    const handleUpdateItems = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedItem = Object.fromEntries(formData.entries());
        // updatedItem.date = selectedDate;
        // console.log(updatedItem);

        // send updated item to the DB 
        axios.put(`https://b11a11-whereisit-server-side.vercel.app/items/${_id}?email=${user.email}`,  updatedItem ,{
            headers: {
                Authorization : `Bearer ${user.accessToken}`
            }
        } )
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/myItems');
                }
            })
            .catch(error => {
                // console.log(error)
            })
    }

    return (
        <div className='max-w-7xl mx-auto py-5 lg:py-3 h-fit'>

            <Fade direction='down' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-7 mb-5'>Update  <span className='text-purple-400'>Items</span></h1>
            </Fade>

            <Fade direction='up' triggerOnce={true}>
                <form onSubmit={handleUpdateItems} className='bg-base-200 py-3 rounded-lg'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Post Type</label>
                            <select defaultValue={type} className="select w-full rounded" name='type'>
                                <option value="" disabled>Select Post Type</option>
                                <option value="Lost">Lost</option>
                                <option value="Found">Found</option>
                            </select>
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Thumbnail</label>
                            <input defaultValue={image} type="url" name='image' className="input w-full rounded" placeholder="Enter Image URL" />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Title</label>
                            <input type="text" defaultValue={title} name='title' className="input w-full rounded" placeholder="Enter Title" />
                        </fieldset>
                        {/* fieldset - 2 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Category</label>
                            <select defaultValue={category} className="select w-full rounded" name='category' >
                                <option value="" disabled >Pick a Category</option>
                                <option value="Pets">Pets</option>
                                <option value="Document">Document</option>
                                <option value="Gadgets">Gadgets</option>
                                <option value="Others">Others</option>
                            </select>
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Location</label>
                            <input type="text" defaultValue={location} name='location' className="input w-full rounded" placeholder="where the item was lost or found" />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Date</label>

                            <DatePicker className="input w-full rounded" name='date'
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                            />

                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full rounded" readOnly value={user.email} />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1 font-medium">

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full rounded" readOnly value={user.displayName} />
                        </fieldset>


                    </div>

                    {/* fieldset - 1 */}
                    <fieldset className="fieldset w-full rounded bg-base-200 rounded-box px-3 py-1 font-medium pb-7">

                        <label className="label">Description</label>
                        <input type="text" defaultValue={description} name='description' className="input w-full rounded" placeholder="Enter Description about Items" />
                    </fieldset>


                    <div className='px-4'>
                        <input className='btn w-full rounded bg-purple-400 text-white md:px-4 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg text-lg' type="submit" value="Update Post" />
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default UpdateItems;