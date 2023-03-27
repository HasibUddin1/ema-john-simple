import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div>
                <h1 className='text-4xl font-bold'>All products are coming here: {products.length}</h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Order Summery</h1>
            </div>
        </div>
    );
};

export default Shop;