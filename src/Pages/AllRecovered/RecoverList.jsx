import React, { use } from 'react';
import RecoverCard from './RecoverCard';

const RecoverList = ({ recoveredItemsPromise }) => {
    const recoveredItems = use(recoveredItemsPromise);
    console.log(recoveredItems)
    return (
        <div>
            {
                recoveredItems.map(item => <RecoverCard
                    key={item._id}
                    item={item}
                ></RecoverCard>)
            }
        </div>
    );
};

export default RecoverList;