import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleClearCart, children }) => {


    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }

    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='bg-[#FFE0B3] h-screen order-container'>
            <div className='px-5'>
                <h1 className='text-4xl font-bold pt-5 mb-10'>Order Summery</h1>
                <p className='text-2xl mt-4 mb-5'>Selected Items: {quantity}</p>
                <p className='text-xl mb-5'>Total Price: ${totalPrice}</p>
                <p className='text-xl mb-5'>Total Shipping Cost: ${totalShipping}</p>
                <p className='text-xl mb-5'>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-2xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <div className='flex justify-center items-center'>
                    <button onClick={handleClearCart} className='bg-[#FF3030] hover:bg-red-700 ease-in-out duration-200 text-white w-96 py-2 mt-5 font-bold rounded-lg'>Clear Cart</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Cart;