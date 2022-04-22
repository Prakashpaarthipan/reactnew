import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Protected(props) {
    const Components = props.cmp;
    var auth = localStorage.getItem('access');
    return (
        <div> {auth === 'secretToken' ? <Components /> : <Navigate to="/" replace />}</div>
    )
}
