import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    async function handleAddToCart(productId, quantity) {
        const addItem = await commerce.cart.add(productId, quantity)
        setCart(addItem.cart)
    }
    async function handleUpdateCartQuantity(productId, quantity) {
        const update = await commerce.cart.update(productId, {quantity})
        setCart(update.cart)
    }
    async function handleRemoveItem(productId) {
        const remove = await commerce.cart.remove(productId)
        setCart(remove.cart)
    }
    async function handleEmptyCart() {
        const emptyCart = await commerce.cart.empty()
        setCart(emptyCart.cart)
    }

    useEffect( () => {
        fetchProducts()
        fetchCart()
    }, [])





//////////////////////////////////////////////////////////////////

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveItem={handleRemoveItem}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}

export default App