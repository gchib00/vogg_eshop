import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

let products = [
    { id: 1, gender: "male", type: "summer", price: 149, name: "Leather sandals", image:"https://i.ibb.co/QdPY8KC/shoe4.jpg"},
    { id: 2, gender: "male", type: "summer", price: 100, name: "Summer sneakers", image:"https://i.ibb.co/Lrkk2Xj/shoe3.jpg" },
    { id: 3, gender: "unisex", type: "summer", price: 320, name: "Running shoes", image: "https://i.ibb.co/NSV0phw/shoe2.jpg" },
    { id: 4, gender: "male", type: "winter", price: 79, name: "Winter boots", image: "https://i.ibb.co/wwwhLw4/shoe1.jpg" },
    { id: 5, gender: "female", type: "spring", price: 40, name: "Rain boots", image: "https://i.ibb.co/wwwhLw4/shoe1.jpg" },
    { id: 6, gender: "female", type: "spring", price: 220, name: "Rain boots", image: "https://i.ibb.co/wwwhLw4/shoe1.jpg" },
    { id: 7, gender: "female", type: "spring", price: 110, name: "Rain boots", image: "https://i.ibb.co/wwwhLw4/shoe1.jpg" },
    { id: 8, gender: "female", type: "spring", price: 200, name: "Rain boots", image: "https://i.ibb.co/wwwhLw4/shoe1.jpg" }
]

function Products() {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>  
                ))}
            </Grid>
        </main>
    )

}


export default Products