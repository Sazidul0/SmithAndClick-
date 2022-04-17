import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/smithLogo.png'

const LogIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='text-center my-5'>
                <img className='w-25' src={logo} alt="" />
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className='d-flex justify-content-center'>
                    <div className="signup-container">

                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />

                        <button>Log In</button>
                    </div>
                </div>
            </form>
            <p className='text-center mt-2 text-danger'><Link className='text-decoration-none  mt-2 text-danger' to='/signup'> Don't have an Account?</Link></p>
        </div>
    );
};

export default LogIn;