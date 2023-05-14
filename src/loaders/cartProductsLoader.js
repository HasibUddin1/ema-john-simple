import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products')
    const products = await loadedProducts.json()
    
    const savedCart = getShoppingCart()
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