import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'


function Product({ product, onAddToCart }) {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6">
                        {product.name}
                    </Typography>
                    <Typography variant="h6">
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" className={classes.description} />
            </CardContent>
            <CardActions disableSpacing class="classes.cardActions">
                <IconButton aria-label="Buy" className={classes.shoppingcartBtn}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product