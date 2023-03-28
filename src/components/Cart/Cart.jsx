import React from 'react';

const Cart = ({ cart }) => {


    let total = 0
    for(const product of cart){
        total = total + product.price
    }

    return (
        <div className='bg-[#FFE0B3] h-full'>
            <div className='px-5'>
                <h1 className='text-4xl font-bold pt-5 mb-10'>Order Summery</h1>
                <p className='text-2xl mt-4 mb-5'>Selected Items: {cart.length}</p>
                <p className='text-xl mb-5'>Total Price: {total}</p>
                <p className='text-xl mb-5'>Total Shipping Cost: </p>
                <p className='text-xl mb-5'>Tax: </p>
                <h6 className='text-2xl font-semibold'>Grand Total: </h6>
            </div>
        </div>
    );
};

export default Cart;