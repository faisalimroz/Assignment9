import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import Or from '../Or/Or';
import './Login.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';




const Login = () => {
    const emailRef=useRef('')
    const passRef=useRef('')
    const navigate=useNavigate()
    // // // const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
   
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value
        const password=passRef.current.value
        console.log(email,password)
        signInWithEmailAndPassword(email,password)
        navigate('/home')
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPass= async ()=>{
        const email=emailRef.current.value;
       if(email){
         await sendPasswordResetEmail(email);
         console.log(email)
       
       }
       
    }
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    if(user){
        console.log(user)
        navigate(from, { replace: true });
    }
    const navigatetoRegister=(event)=>{
        navigate('/register')
      }
    return (
        <div>
       
            <Form onSubmit={handleSubmit} className='container w-50 mt-5 primary formss'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef}  type="email" placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
              
                <Button className='w-50 primary d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='container  w-50 mt-2'>New to our site?<Link to="/register"className='pe-auto text-decoration-none' style={{color:"red"}}onClick={navigatetoRegister}>create account</Link> </p>
            <p className='container  w-50 mt-2'>Forgot?<p className='d-inline ' style={{color:"red"}}onClick={resetPass} >Forget Pssword</p> </p>
            </Form>
            
            <div>

            </div>
            <Or></Or>
        </div>
    );
};

export default Login;