import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='mt-20'>
            <form className='w-[500px] mx-auto border-2 rounded-lg p-10 shadow-xl'>
                <h1 className='text-5xl text-center font-semibold mb-7'>Please Sign Up</h1>
                <div className='mb-5'>
                    <label className='block mb-2 font-semibold' htmlFor="email">Email</label>
                    <input className='border-2 w-full rounded-lg h-[55px] text-xl' type="email" name="email" id="email" required />
                </div>
                <div className='mb-10'>
                    <label className='block mb-2 font-semibold' htmlFor="password">Password</label>
                    <input className='border-2 w-full rounded-lg h-[55px] text-xl' type="password" name="password" id="password" required />
                </div>
                <div className='mb-10'>
                    <label className='block mb-2 font-semibold' htmlFor="confirm">Confirm Password</label>
                    <input className='border-2 w-full rounded-lg h-[55px] text-xl' type="password" name="confirm" id="confirm" required />
                </div>
                <input className='text-xl font-semibold bg-[#FF9900] bg-opacity-30 hover:bg-opacity-70 ease-in-out duration-200 w-full py-4 rounded-lg' type="submit" value="Sign Up" />
            <p className='text-center mt-2 font-semibold'>Already an Account ? <Link className='text-[#FF9900]' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;