import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../images/smithLogo.png'
import './SignUp.css'
import auth from '../../../firebase.init';
import SocialLogin from '../../Share/SocialLogin/SocialLogin';
import Loading from '../../Share/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';


const SignUp = () => {
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');



    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            toast("Password and Confirm Password didn't matched.")
        }

        // console.log(email, password, confirmPassword)
    }


    if (user) {
        navigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='responsive-signup-container'>
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
            <p className='text-center'>Already have an Account? <Link to='/login' className='text-decoration-none  mt-2 text-primary'>  Please Log In </Link></p>
            <SocialLogin></SocialLogin><ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;