import React, { use } from 'react';
import MyItemsRow from './MyItemsRow';
import { Fade } from 'react-awesome-reveal';

const MyItemsList = ({myItems, setMyItems, myItemsPromise}) => {
    const manageMyItems = use(myItemsPromise);
    return (
        <div>
            <Fade direction='right' triggerOnce={true}>
                <div className="overflow-x-auto border-r border-l border-b border-base-300 shadow-sm">
                    <table className="table w-full min-w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                    manageMyItems.map((item, index) => <MyItemsRow
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        myItems={myItems}
                                        setMyItems={setMyItems}
                                    ></MyItemsRow>)
                                }

                        </tbody>

                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default MyItemsList;