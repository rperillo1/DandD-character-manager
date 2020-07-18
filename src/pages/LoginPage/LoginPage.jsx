import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        // TODO: implement in an elegant way
        this.setState({
            // use Computed Property Names
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            // Successfully signed up - show GamePage
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    }

    render() {
        return (
            <>
            <div className='flex-container login-text'>
                <h3 className="header-footer">Log In</h3>
            </div>
            <div className="LoginPage flex-container">
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
                            <Link className="btn btn-warning" to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
            </>
    );
    }
}

export default LoginPage;
