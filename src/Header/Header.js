import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth)
    const buttonSignOut=()=>{
        signOut(auth)
    }
    console.log(user)
    const navigate =useNavigate()
    return (
        <div>


            <Navbar className="" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  as={Link} to='/home'>OLLA</Navbar.Brand>
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link  as={Link} to='/destination'>Destination</Nav.Link>
                        <Nav.Link  as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link   as={Link} to='/contact'>Contact</Nav.Link>
                       

                       {
                        user? <button onClick={buttonSignOut}>Sign Out</button>:
                        <Nav.Link  as={Link} to='/login'>Login</Nav.Link>
                       }
                       {/* {
                        user && navigate('/destination')?
                        <button>{user.name}</button>:
                        <button onClick={buttonSignOut}>Sign Out</button>

                       } */}
                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;