import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';

const RecoverModal = ({ item, setItemStatus }) => {

    const { user } = useAuth();
    const { _id, title, image, type, date, location, description, email, name, category, status } = item;

    const [selectedDate, setSelectedDate] = useState(new Date(date));

    const handleRecover = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const recoveredInfo = Object.fromEntries(formData.entries());

        const recoveredItem = { ...item, ...recoveredInfo, status: 'recovered' };
        // console.log(recoveredItem)



        // set status = 'recovered' in db 
        axios.patch(`https://b11a11-whereisit-server-side.vercel.app/items/${_id}`, { status: 'recovered' })
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    setItemStatus('recovered');
                }

            })


        // post all info to '/recoveredItems' API 
        axios.post('https://b11a11-whereisit-server-side.vercel.app/recoveredItems', recoveredItem)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item Recovered Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-7 mb-5'>Recovered  <span className='text-purple-400'>Info</span></h1>
            </div>

            <form onSubmit={handleRecover} className='bg-base-200 py-3 rounded'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                    {/* <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1">

                        <label className="label">Post Type</label>
                        <select defaultValue={type} className="select w-full rounded" name='type'>
                            <option value="" disabled>Select Post Type</option>
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </fieldset> */}

                    {/* fieldset - 1 */}
                    <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1">

                        <label className="label">Recovered Location</label>
                        <input type="text" name='recoveryLocation' className="input w-full rounded" placeholder="Recovered Location" />
                    </fieldset>

                    {/* fieldset - 1 */}
                    <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1">

                        <label className="label">Recovered Date</label>

                        <DatePicker className="input w-full rounded" name='recoveryDate'
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                        />

                    </fieldset>



                    {/* fieldset - 1 */}
                    <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1">

                        <label className="label">Recovered person's Email</label>
                        <input type="email" name='recoveryEmail' className="input w-full rounded" readOnly value={user?.email || ""} />
                    </fieldset>

                    {/* fieldset - 1 */}
                    <fieldset className="fieldset bg-base-200 rounded-box px-3 py-1">

                        <label className="label">Recovered person's Name</label>
                        <input type="text" name='recoveryName' className="input w-full rounded" readOnly  value={user?.displayName || ""} />
                    </fieldset>


                </div>

                {/* fieldset - 1 */}
                <fieldset className="fieldset w-full rounded bg-base-200 rounded-box px-3 pt-3 pb-7">

                    <label className="label">Recovered person's Image URL</label>
                    <input type="text" readOnly value={user?.photoURL || ""} name='recoveryPhotoURL' className="input w-full rounded" placeholder="Enter Description about Items" />
                </fieldset>


                <div className='px-4'>
                    <input className='btn w-full bg-purple-400 text-white md:px-4 transition-all hover:font-semibold rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg text-lg' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default RecoverModal;