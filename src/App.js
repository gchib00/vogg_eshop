import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const { data } = await commerce.products.list()
        setProducts(data)
    }
    useEffect( () => {
        fetchProducts()
    }, [])



//////////////////////////////////////////////////////////////////

    return (
        <div>
            <Navbar />
            <Products products={products} />
            <Footer />
        </div>
    )

}

export default App