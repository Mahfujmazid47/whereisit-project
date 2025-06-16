import React from 'react';
import Slider from './Slider';
import LatestFindLostItems from './LatestFindLostItems';
import { useLoaderData, useLocation } from 'react-router';
import Steps from './Steps';
import Stats from './Stats';
import Loading from '../../Shared/Loading';

const Home = () => {

    const items = useLoaderData();
    // console.log(items)
    // const {state} = useLocation();
    // console.log(location)
    // if (state == 'loading'){
    //     return <Loading />
    // }

    return (
        <div>
            {/* Slider */}
            <section>
                <Slider></Slider>
            </section>

            {/* Latest Find & Lost Items Section */}
            <section>
            <LatestFindLostItems
            items={items}
            ></LatestFindLostItems>
            </section>

            {/* steps Section  */}
            <section>
                <Steps></Steps>
            </section>

            <section>
                <Stats></Stats>
            </section>
        </div>
    );
};

export default Home;