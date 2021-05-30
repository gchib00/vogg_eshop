import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'


function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    async function fetchProducts() {
        const { data } = await commerce.products.list()
        setProducts(data)
    }
    
    async function fetchCart() {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
    }
    async function handleAddToCart(productId, quanitity) {
        const addItem = await commerce.cart.add(productId, quanitity)
        setCart(addItem.cart)
    }

    useEffect( () => {
        fetchProducts()
        fetchCart()
    }, [])





//////////////////////////////////////////////////////////////////

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )

}

export default App