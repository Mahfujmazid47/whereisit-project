import React, { use } from 'react';
import { Fade } from 'react-awesome-reveal';
import RecoverRow from './RecoverRow';

const RecoverTable = ({recoveredItemsPromise}) => {
    const recoveredItems =use(recoveredItemsPromise);
    return (
        <div>
            <Fade direction='right' triggerOnce={true}>
                <div className="overflow-x-auto border-r mt-5 border-l border-b border-base-300 shadow-sm">
                    <table className="table w-full min-w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Title</th>
                                <th>Recovered Location</th>
                                <th>Recovery Date</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                recoveredItems.map((item, index) => <RecoverRow
                                    key={item._id}
                                    item={item}
                                    index={index}
                                // myItems={myItems}
                                // setMyItems={setMyItems}
                                ></RecoverRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default RecoverTable;