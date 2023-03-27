import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            <div className='grid grid-cols-3 gap-10 p-10'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Order Summery</h1>
            </div>
        </div>
    );
};

export default Shop;