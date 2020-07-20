import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './HomePage.css'


function HomePage(props) {
    return (
        <div className='flex-container'>
            <div className='main-div'>
                <h1 className='home-title'>D&D Character Manager</h1>
                {userService.getUser() ?
                    <>
                        {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
                        <br />
                        <Link className="btn btn-primary" to='/' onClick={props.handleLogout}>LOGOUT</Link>
                    </>
                    :
                    <Link className="btn btn-primary" exact to='/login'>LOGIN</Link>
                }
            </div>
        </div>
    )
}

export default HomePage;