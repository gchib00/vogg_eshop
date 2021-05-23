import React from 'react'
import Grid from '@material-ui/core'

let products = [
    { id: 1, gender: "male", type: "summer", price: 149, name: "Leather sandals" },
    { id: 2, gender: "male", type: "summer", price: 100, name: "Summer sneakers" },
    { id: 3, gender: "unisex", type: "summer", price: 320, name: "Running shoes" },
    { id: 4, gender: "male", type: "winter", price: 79, name: "Winter boots" },
    { id: 5, gender: "female", type: "spring", price: 200, name: "Rain boots" }
]

function Products() {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>  
            ))}
        </Grid>

    </main>


}


export default Products