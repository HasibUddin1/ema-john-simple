import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className='bg-slate-900 h-20 flex items-center justify-between px-20'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex gap-5 anchors'>
                <Link className='font-semibold' to="/">Shop</Link>
                <Link className='font-semibold' to="/orders">Orders</Link>
                <Link className='font-semibold' to="/inventory">Inventory</Link>
                <Link className='font-semibold' to="/login">Login</Link>
                <Link className='font-semibold' to="/sign-up">Sign Up</Link>
                {user && <span>{user.email} <button onClick={handleLogout} className='bg-[#FFE0B3] hover:bg-[#FF9900] ease-in-out duration-200 ml-2 text-black font-semibold px-4 rounded-full'>Log Out</button> </span>}
            </div>
        </div>
    );
};

export default Header;