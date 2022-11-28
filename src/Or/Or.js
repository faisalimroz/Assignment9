import React from 'react';
import './Or.css';

import { useSignInWithGoogle, useSignInWithGithub} from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
const Or = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    if (user||user1) {
        Navigate('/home')
    }
    if (error|| error1) {
        <p>{error.message}</p>
    }
    return (
        <div>

            <div className='d-flex align-items-center container  w-50 mt-2'>
                <div style={{ height: "1px" }} className='w-50  bg-primary'></div>
                <p>Or</p>
                <div style={{ height: "1px" }} className='w-50  bg-primary'></div>
            </div>
            <div className=''>

                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-40 p-3 d-block mx-auto d-block mb-2 '>
                    <img style={{ height: "20px" }} className='w-auto' src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="" />
                    <span className='px-2'>   Google sign in</span>

                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-40 p-3 d-block mx-auto d-block mb-2 '>
                    <img style={{ height: "35px" }} className='w-auto' src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="" />
                    <span className='px-2'>   GitHub sign in</span>

                </button>
            </div>
        </div>
    );
};

export default Or;