import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const { totalProducts } = useLoaderData()

    const itemsPerPage = 10;

    const totalPages = Math.ceil(totalProducts / itemsPerPage)

    const pageNumbers = [...Array(totalPages).keys()]

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            const quantity = storedCart[id]
            if (addedProduct) {
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <>
            <div className='shop-container'>
                <div className='grid lg:grid-cols-3 gap-10 p-10'>
                    {
                        products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div>
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link to='/orders'>
                            <button className='bg-[#FF9900] hover:bg-orange-500 ease-in-out duration-200 text-white w-96 mt-5 py-2 rounded-lg font-bold'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div className='flex gap-5 justify-center mb-10'>
                {
                    pageNumbers.map(number => <button className='px-6 py-2 bg-[#FFE0B3] hover:bg-orange-500 ease-in-out duration-200  rounded-lg font-bold' key={number}>{number}</button>)
                }
            </div>
        </>
    );
};

export default Shop;