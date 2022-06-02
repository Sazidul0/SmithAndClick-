import React from 'react';
import google from '../../../images/Social Icons/googleIcon.png'
import github from '../../../images/Social Icons/githubIcon.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>


    }

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 mx-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
            </div>
            <div className='text-center'>
                {errorElement}
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2 social-btn'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-2 social-btn'>
                    <img className='rounded' style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;