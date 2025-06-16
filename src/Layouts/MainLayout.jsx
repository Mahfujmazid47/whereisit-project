import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {

    const {state} = useLocation();

    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Suspense fallback={<Loading />}>
                    {state === 'loading' ? <Loading /> : <Outlet></Outlet>}
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;