import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Shared/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {loading, user} = useAuth();
    const location = useLocation();

    if(loading === true){
        return <Loading />;
    }
    else if(user && user.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoutes;