import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/smithLogo.png'
import SocialLogin from '../../Share/SocialLogin/SocialLogin';

const LogIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();

    let errorElement;
    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex justify-content-center my-4'>
                <div className=''>
                    <img className='w-100' src={logo} alt="" />
                </div>
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
            {errorElement}
            <p className='text-center mt-2 '>Don't have an Account?<Link className='text-decoration-none  mt-2 text-primary' to='/signup'> Please Sign In</Link></p>
            <p className='text-center mt-2 '>Forget Password?<Link onClick={resetPassword} className='text-decoration-none  mt-2 text-primary' to='/signup'> Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default LogIn;