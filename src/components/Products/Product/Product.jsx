import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'


function Product({product}) {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} name={product.name} image={product.image} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6">
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h6" color="textSecondary">For {product.type}</Typography>
            </CardContent>
            <CardActions disableSpacing class="classes.cardActions">
                <IconButton aria-label="Buy">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product