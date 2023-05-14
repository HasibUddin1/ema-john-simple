import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    // console.log(product)
    const { _id, img, name, price, quantity } = product
    return (
        <div className='border-2 p-2 rounded-xl review-item flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
                <img className='rounded-xl' src={img} alt="" />
                <div>
                    <h2 className='font-semibold'>{name}</h2>
                    <h2>Price: <span className='text-yellow-500 font-bold'>${price}</span></h2>
                    <h2>Quantity: <span className='text-yellow-500 font-bold'>{quantity}</span></h2>
                </div>
            </div>
            <button onClick={() => handleRemoveFromCart(_id)} className='bg-red-300 hover:bg-red-400 ease-in-out duration-200 rounded-full btn-delete'><FontAwesomeIcon className='text-red-600 text-xl' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;