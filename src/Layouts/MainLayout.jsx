import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { ThemeProvider, useTheme } from '../ThemeContext/ThemeContext';

const MainLayout = () => {

    const navigation = useNavigation();
    // console.log(navigation)
    const { theme } = useTheme();

    return (
        <>
            <nav
                className={
                    theme === "dark"
                        ? "" 
                        : " bg-gradient-to-r from-purple-50 to-purple-100" // 
                }
            >
                <Navbar></Navbar>
            </nav>
            <main
            className={
                    theme === "dark"
                        ? "py-10" 
                        : " bg-gradient-to-r from-purple-50 to-purple-100 py-15" // 
                }
            >
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