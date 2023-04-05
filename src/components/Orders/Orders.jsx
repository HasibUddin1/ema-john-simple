import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const addedProductsCart = useLoaderData()
    const [cart, setCart] = useState(addedProductsCart)

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    // console.log(cart)
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 mx-auto mt-10 flex flex-col gap-5'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        ></ReviewItem>)
                    }
                </div>
                <div>
                    <Cart 
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='flex justify-center items-center' to='/checkout'>
                            <button className='bg-[#FF9900] hover:bg-orange-500 ease-in-out duration-200 w-96 py-2 text-white font-bold rounded-xl mt-5'>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;