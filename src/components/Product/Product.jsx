import React from 'react';

const Product = (props) => {
    const {name, img, price, quantity, seller} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='text-2xl font-semibold mt-3'>{name}</h6>
        </div>
    );
};

export default Product;