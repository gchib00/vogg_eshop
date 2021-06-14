import React, {useState}  from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Modal, Fade } from '@material-ui/core'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import useStyles from './styles'




function Product({ product, onAddToCart }) {
    const classes = useStyles()
    let [zoom, setZoom] = useState(false)

    function handleClick() {
        setZoom(!zoom)
    }

    //Function to zoom/unzoom the image
    function Zoom() {
        if (zoom) {
            return (
                <Modal open={zoom} onClick={handleClick} className={classes.modal} closeAfterTransition>
                    <Fade in={true} timeout={{ enter: '500ms'}}>
                        <img src={product.media.source} className={classes.zoomedImage} alt="zoomed" />
                    </Fade>
                </Modal>
            )
        } else {
            return (
                null
            )
        }
    }
    /////////////////////////////////
    return(
        <>
            <Card className={classes.root} >
                <CardMedia className={classes.media} title={product.name} image={product.media.source} onClick={handleClick} />
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
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Buy" className={classes.shoppingcartBtn} onClick={handleClick}>
                        <PhotoLibraryIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Zoom />
        </>
    )
}

export default Product