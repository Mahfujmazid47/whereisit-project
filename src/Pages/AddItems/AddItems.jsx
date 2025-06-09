import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Fade } from 'react-awesome-reveal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from '../../Shared/Loading';

const AddItems = () => {

    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());

    // if(user === null) {
    //     return <Loading />
    // };

    

    const handleAddItems = () => {

    }

    return (
        <div className='max-w-7xl mx-auto py-20 lg:py-28 h-fit'>

            <Fade direction='down' triggerOnce={true}>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold md:mb-7 mb-5'>Add   <span className='text-purple-400'>Tasks</span></h1>
            </Fade>

            <Fade direction='up' triggerOnce={true}>
                <form onSubmit={handleAddItems} className='bg-base-200 p-3 md:p-10 rounded-lg'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Post Type</label>
                            <select className="select w-full" name='type' >
                                <option>Select Post Type</option>
                                <option>Lost</option>
                                <option>Found</option>
                            </select>
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Thumbnail</label>
                            <input type="url" name='image' className="input w-full" placeholder="Enter Image URL" />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Title</label>
                            <input type="text" name='title' className="input w-full" placeholder="Enter Title" />
                        </fieldset>
                        {/* fieldset - 2 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Category</label>
                            <select defaultValue="Pick a color" className="select w-full" name='category' >
                                <option>Pick a Category</option>
                                <option>Pets</option>
                                <option>Document</option>
                                <option>Gadgets</option>
                                <option>Others</option>
                            </select>
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Location</label>
                            <input type="text" name='location' className="input w-full" placeholder="where the item was lost or found" />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Deadline</label>

                            <DatePicker className="input w-full" name='date'
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                            />

                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" value={user.email} />
                        </fieldset>

                        {/* fieldset - 1 */}
                        <fieldset className="fieldset bg-base-200 rounded-box p-4">

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" value={user.displayName} />
                        </fieldset>


                    </div>

                    {/* fieldset - 1 */}
                    <fieldset className="fieldset w-full bg-base-200 rounded-box p-4 pb-7">

                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Enter Description about Items" />
                    </fieldset>


                    <div className='px-4'>
                        <input className='btn w-full bg-purple-400 text-white md:px-4 transition-all hover:font-semibold hover:rounded hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 active:scale-95 hover:shadow-lg text-lg' type="submit" value="Add Post" />
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default AddItems;