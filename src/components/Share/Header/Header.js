import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/smithLogo.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex align-items-center justify-content-center header-container'>
            <div className='d-flex '>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
            </div>
            <div className='d-flex ms-5'>
                <Link to='/'>
                    <img className='w-25 my-1 ms-5' src={logo} alt="" />
                </Link>
            </div>
            <div className='d-flex'>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/login'>Log In</CustomLink>
            </div>

        </div>
    );
};

export default Header;