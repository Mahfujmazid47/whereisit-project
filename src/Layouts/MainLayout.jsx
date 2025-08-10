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
            <nav className='bg-gradient-to-r from-purple-50 to-purple-100'>
                <Navbar></Navbar>
            </nav>
            <main className='bg-gradient-to-r from-purple-50 to-purple-100'>
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