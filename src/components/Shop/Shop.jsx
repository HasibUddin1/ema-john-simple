import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const { totalProducts } = useLoaderData()

    const [itemsPerPage, setItemsPerPage] = useState(10)

    const [currentPage, setCurrentPage] = useState(0)


    const totalPages = Math.ceil(totalProducts / itemsPerPage)

    const pageNumbers = [...Array(totalPages).keys()]

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [currentPage, itemsPerPage])
    useEffect(() => {
        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart)
        // console.log(ids)

        fetch('https://ema-john-server-swart.vercel.app/productsByID', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(selectedProducts => {
                // console.log(selectedProducts)
                const savedCart = []
                for (const id in storedCart) {
                    const addedProduct = selectedProducts.find(product => product._id === id)
                    const quantity = storedCart[id]
                    if (addedProduct) {
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)
            })



    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    const handleChangeItemsPerPage = (event) => {
        const newItemsPerPage = parseInt(event.target.value);
        setCurrentPage(0);
        setItemsPerPage(newItemsPerPage);
    };

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
            <p className='text-2xl text-center font-bold mb-3'>Current Page: {currentPage}</p>
            <div className='flex gap-5 justify-center mb-10'>
                {
                    pageNumbers.map(number => <button
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number ?
                            'px-6 py-2 bg-orange-600 rounded-lg font-bold' :
                            'px-6 py-2 bg-[#FFE0B3] hover:bg-orange-400 ease-in-out duration-200  rounded-lg font-bold'} key={number}>{number + 1}</button>)
                }
                <select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </>
    );
};

export default Shop;