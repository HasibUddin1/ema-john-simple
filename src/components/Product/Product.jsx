import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product
    const handleAddToCart = props.handleAddToCart

    return (
        <div id='product' className='product rounded-lg relative'>
            <img className='rounded-lg p-2' src={img} alt="" />
            <div className='flex flex-col justify-between p-2'>
                <h5 className='text-2xl font-bold mt-3'>{name}</h5>
                <h6 className='text-xl font-bold mt-3 mb-5'>Price: ${price}</h6>
                <p className='font-semibold mt-3 mb-3'>Manufacturer: {seller}</p>
                <p className='font-semibold mt-3 mb-3'>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='bg-[#FFE0B3] w-full font-semibold hover:bg-orange-400 ease-in-out duration-200 h-12 btn-cart absolute bottom-0'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;