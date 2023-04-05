import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData()
    console.log(cart)
    return (
        <div className='p-20'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className='text-5xl'>Orders Page:{cart.length}</h1>
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;