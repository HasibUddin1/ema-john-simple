import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const addedProductsCart = useLoaderData()
    const [cart, setCart] = useState(addedProductsCart)

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;