import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoader = async () => {
    // if cart data is in database, you have to use async await
    const savedCart = getShoppingCart()

    const ids = Object.keys(savedCart)
    // console.log(ids)

    const loadedProducts = await fetch('http://localhost:5000/productsByID', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(ids)
    })
    const products = await loadedProducts.json()
    
    const shoppingCart = []
    for(const id in savedCart){
        const addedProduct = products.find(product => product._id === id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity= quantity
            shoppingCart.push(addedProduct)
        }
    }

    return shoppingCart
}

export default cartProductsLoader