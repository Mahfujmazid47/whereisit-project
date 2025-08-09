import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {

    const navigation = useNavigation();
    // console.log(navigation)

    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='mt-15'>
                <Suspense fallback={<Loading />}>
                    {navigation.state === 'loading' ? <Loading /> : <Outlet></Outlet>}
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;