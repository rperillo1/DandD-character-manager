import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './HomePage.css'


function HomePage(props) {
    return (
        <div className='flex-container'>
            <div className='main-div'>
                <h1>Home Page</h1>
                {userService.getUser() ?
                    <>
                        {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
                        <br />
                        <Link to='/' onClick={props.handleLogout}>LOGOUT</Link>
                    </>
                    :
                    <Link exact to='/login'>LOGIN</Link>
                }
            </div>
        </div>
    )
}

export default HomePage;