import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;