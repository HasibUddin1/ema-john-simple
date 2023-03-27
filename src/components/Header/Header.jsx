import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-900 h-20 flex items-center justify-between px-20'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex gap-5 anchors'>
                <a className='font-semibold' href="/order">Order</a>
                <a className='font-semibold' href="/review">Order Review</a>
                <a className='font-semibold' href="/inventory">Manage Inventory</a>
                <a className='font-semibold' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;