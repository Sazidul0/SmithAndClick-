import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/smithLogo.png';
import './Header.css'

import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <div>
            <Navbar fixed="top" style={{ height: '60px' }} className='bg-primary responsive-header-container' collapseOnSelect expand="lg" variant="dark">
                <Container className=''>
                    <Navbar.Brand>
                        <img className='w-25' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='me-5' as={CustomLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className='me-5' as={CustomLink} to='/about'>About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-info' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link eventKey={2} as={CustomLink} to='/login'>
                                        LogIn
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;