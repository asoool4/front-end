import React from 'react'
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute(props) {
        if (!localStorage.getItem("userToken")) {
            
            return <Navigate to='Login' />
        
        }
        else
        {
            return props.children;
        }
}
