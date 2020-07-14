import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


function HomePage(props) {
    return (
        <>
        <h1>Home Page</h1>
        {userService.getUser() ?
        <Link exact to='/' onClick={props.handleLogout}>LOGOUT</Link>
        :
        <Link exact to='/login'>LOGIN</Link>
        }
        </>
    )
}

export default HomePage;