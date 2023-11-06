import React from 'react';
import useAuth from './../Hooks/useAuth';
import { Navigate } from 'react-router-dom';


const PrivetRoutes = ({children}) => {
    
const {user, isLoading}= useAuth()

if(isLoading){
return <div className="h-screen flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
}


if(!isLoading && !user?.email){
    return <Navigate to="/login" /> 
    
}
    return children;
}

export default PrivetRoutes;