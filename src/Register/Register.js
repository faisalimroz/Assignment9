import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import Or from '../Or/Or';
import './Register.css'
const Register = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const confirmpassRef=useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigatetoLogin = event => {
        navigate('/login')
    }
    const handleSubmits = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passRef.current.value
        const name = nameRef.current.value
        const confirmPass=confirmpassRef.current.value;

        console.log(email, password)
        if( password===confirmPass){
           
            createUserWithEmailAndPassword(email, password,name)
        }
        navigate('/home')
    }

    return (
        <div>
           
            <Form onSubmit={handleSubmits} className='container w-50 mt-5 primary forms'>
            <h1>Create an Account</h1>
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required ref={nameRef} type="text" placeholder="Enter Name" />

                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control required  ref={confirmpassRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-50 primary d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='container  w-50 mt-2'>Already have an account?<Link to="/login" className='pe-auto text-decoration-none' style={{ color: "red" }} onClick={navigatetoLogin}>Login now</Link> </p>
            </Form>
           
            <Or></Or>
        </div>
    );
};

export default Register;