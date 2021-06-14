import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import ReactDOM from 'react-dom'

import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

import MessengerCustomerChat from 'react-messenger-customer-chat';


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


    return (
        <div>
            <Navbar />

            {loading ? <LoadingScreen /> :
                <div>
                    <Products products={products} />
                    <Footer />
                </div>
            }
                <MessengerCustomerChat
                    pageId="101031432228374"
                    appId="888421265075066"
                />
        </div>
    )

}

export default App