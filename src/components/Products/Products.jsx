import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from "./styles"

function Products({products, onAddToCart}) {

    const [gender, setGender] = useState('All')
    const classes = useStyles()

    let femaleShoes = []; let maleShoes = [];
    let renderArray = products

    // Categorizes shoes according to gender
    for (let i=0; i<products.length; i++) { 
        let eachName = products[i].name
        if (eachName.includes('M')){
            maleShoes.push(products[i])
        }
        if (eachName.includes('W')){
            femaleShoes.push(products[i])
        }
    } 
    ////////////////////////////////////////

    // decides which array (male, female or both) should be rendered
    if (gender === "all"){
        renderArray = products
    }
    if (gender === "Female"){
        renderArray = femaleShoes
    }
    if (gender === "Male"){
        renderArray = maleShoes
    }
    //////////////////////////////////////////////////////////////////
    
    // lets user render products specific to only one gender 
    function handleChange(event) {
        setGender(event.target.value)
    }
    ////////////////////////////////////////////////////////
    return(
        <main className={classes.content} >
            <div className={classes.toolbar} />
            <div className={classes.genderfilterContainer}>
                <div className={classes.genderFilter}>
                    <label className={classes.option1} style={{fontFamily: 'Roboto, sans-serif'}}>
                        <input 
                            type='radio' 
                            name='genderRadioGroup' 
                            value='All'  
                            checked={gender === 'All'} 
                            id='test1'
                            onChange={handleChange}
                            style={{display: 'none'}}
                            />ყველა
                    </label>
                    <label className={classes.option2} style={{fontFamily: 'Roboto, sans-serif'}}>
                        <input 
                            type='radio' 
                            name='genderRadioGroup' 
                            value='Female' 
                            checked={gender === 'Female'}
                            onChange={handleChange}    
                            style={{display: 'none'}}
                            />ქალი
                    </label>
                    <label className={classes.option3} style={{fontFamily: 'Roboto, sans-serif'}}>
                        <input 
                            type='radio' 
                            name='genderRadioGroup' 
                            value='Male' 
                            checked={gender === 'Male'} 
                            onChange={handleChange} 
                            style={{display: 'none'}}  
                            />კაცი
                    </label>
                </div>
            </div>
            <Grid container justify="center" spacing={4}>

                    {renderArray.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>  
                    ))}

                    


                
\


            </Grid>
        </main>
    )

}


export default Products