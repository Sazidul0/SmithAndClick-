import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../images/smithLogo.png'
import './SignUp.css'
import auth from '../../../firebase.init';


const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        // console.log(email, password, confirmPassword)
    }

    if (user) {
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex justify-content-center my-4'>
                <div>
                    <img className='w-100' src={logo} alt="" />
                </div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className='d-flex justify-content-center'>
                    <div className="signup-container">
                        <input type="text" placeholder='Name' />
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />
                        <input ref={confirmPasswordRef} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                        <button>Sign Up</button>
                    </div>
                </div>
            </form>
            <p className='text-center text-danger'>{error?.message}</p>
            <p className='text-center'><Link to='/login' className='text-decoration-none  mt-2 text-danger'> Already have an Account</Link></p>

        </div>
    );
};

export default SignUp;