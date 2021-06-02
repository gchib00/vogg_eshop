import React from 'react'
import { Typography, Button, Card, CardMedia, CardActions, CardContent } from '@material-ui/core'
import useStyles from './styles'

function CartItem({ item, handleUpdateCartQuantity, handleRemoveItem }) {
    const classes = useStyles()
    return(
        <Card> 
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant='contained' type='button' color='grey' onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQuantity(item.id, item.quantity -1)}>-</Button>
                    <Typography className={classes.quantity}>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQuantity(item.id, item.quantity +1)}>+</Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default CartItem