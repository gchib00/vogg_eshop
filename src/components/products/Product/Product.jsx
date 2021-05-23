import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

function Product({product}) {
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5">
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">Meant for {product.type}</Typography>
            </CardContent>
            <CardActions disableSpacing class="classes.cardActions">
                <IconButton aria-label="Buy">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}