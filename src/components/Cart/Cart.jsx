import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    let totalPrice = 0
    let totalShipping = 0
    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='bg-[#FFE0B3] h-screen order-container'>
            <div className='px-5'>
                <h1 className='text-4xl font-bold pt-5 mb-10'>Order Summery</h1>
                <p className='text-2xl mt-4 mb-5'>Selected Items: {cart.length}</p>
                <p className='text-xl mb-5'>Total Price: ${totalPrice}</p>
                <p className='text-xl mb-5'>Total Shipping Cost: ${totalShipping}</p>
                <p className='text-xl mb-5'>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-2xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;