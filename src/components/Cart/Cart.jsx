import React from 'react'
import { Grid, Typography, Button, Container } from '@material-ui/core'
import useStyles from './styles'


function Cart ({cart}) {

    const classes = useStyles()


    function EmptyCart() {
        return(
            <Typography variant='h2'>You don't have any items in your cart.</Typography>
        )
    }

    function FilledCart() {
        return(
            <div>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div>{item.name}</div>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_code}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} 
                            type='button' 
                            size='large'
                            color='secondary'
                            variant='contained'>
                                Empty Cart
                        </Button>
                        <Button className={classes.checkoutButton} 
                            type='button' 
                            size='large'
                            color='primary'
                            variant='contained'>
                                Checkout
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    if ( typeof cart.line_items == 'undefined' ) return 'loading...' //This checks if cart API is fetched yet or not. Without this error-return, the whole program will fail (code below will try to access unfetched object). 

    return(
        <Container>
            <div className={classes.toolbar} />
            <Typography>This is shopping cart page</Typography>
            { (cart.line_items.length == 0) ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart