import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {
        setLoading(true)
        const { data } = await commerce.products.list()
        setLoading(false)
        setProducts(data)
    }
    useEffect( () => {
        fetchProducts()
    }, [])



//////////////////////////////////////////////////////////////////

    return (
        <div>
            <Navbar />

            {loading ? <LoadingScreen /> :
                <div>
                    <Products products={products} />
                    <Footer />
                </div>
            }
        </div>
    )

}

export default App