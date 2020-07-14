import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
        <h1>Home Page</h1>
        <Link exact to='/login'>LOGIN</Link>
        </>
    )
}

export default HomePage;