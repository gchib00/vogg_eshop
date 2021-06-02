import React from 'react'
import { Grid, Typography, Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
 
import useStyles from './styles'
import CartItem from './CartItem/CartItem'


function Cart ({ cart, handleUpdateCartQuantity, handleRemoveItem, handleEmptyCart }) {

    const classes = useStyles()


    function EmptyCart() {
        return(
            <div>
                <Typography variant='h2'>You don't have any items in your cart.</Typography>
                <Link to='/'>Add item(s)</Link>
            </div>
        )
    }

    function FilledCart() {
        return(
            <div>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem 
                                item={item} 
                                handleUpdateCartQuantity={handleUpdateCartQuantity}
                                handleRemoveItem={handleRemoveItem}
                            />
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
                            variant='contained'
                            onClick={handleEmptyCart}>
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
            { (cart.line_items.length === 0) ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart