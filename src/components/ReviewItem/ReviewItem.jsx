import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    console.log(product)
    const { id, img, name, price, quantity } = product
    return (
        <div className='border-2 p-2 rounded-xl review-item'>
            <div className='flex gap-5 items-center'>
                <img className='rounded-xl' src={img} alt="" />
                <div>
                    <h2 className='font-semibold'>{name}</h2>
                    <h2>Price: <span className='text-yellow-500 font-bold'>${price}</span></h2>
                    <h2>Quantity: <span className='text-yellow-500 font-bold'>{quantity}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;