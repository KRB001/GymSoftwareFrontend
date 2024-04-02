import React, { useState} from 'react';
import './Login.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            alert('Done');
        }
    };

    const validate = () => {
        const error = {};

        if (!username) {
            error.username = 'Invalid username';
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            error.username = 'Username not matched';
        } else {
            error.username = '';
        }

        if (!password) {
            error.password = 'Invalid password';
        } else if (password.length < 8) {
            error.password = 'Password not matched';
        } else {
            error.password = '';
        }
        return error;
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>

                <div className='input-box'>
                    <input type='text' onChange={e => setUsername(e.target.value)} placeholder='Username' required />
                    <FaUserCircle className='icon' />
                    {errors.username && <div className='errors'>{errors.username}</div>}
                </div>

                <div className='input-box'>
                    <input type='password' onChange={e => setPassword(e.target.value)}  placeholder='Password' required />
                    <RiLock2Fill className='icon' />
                    {errors.password && <div className='errors'>{errors.password}</div>}
                </div>

                <div className='remember-forget'>
                    <label><input type='checkbox' />Remember Me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" onClick={handleSubmit}>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
                
            </form>
        </div>
    )
}

export default Login;