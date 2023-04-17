import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(user){
        return children
    }
    if(loading){
        return <h1 className='text-4xl text-center font-semibold'>Loading.....</h1>
    }

    return (
        <Navigate to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;