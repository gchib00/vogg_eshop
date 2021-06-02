import React from 'react'
import { Typography, Menu, MenuItem, Badge, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import useStyles from './styles'


function Navbar({ totalItems }) {
    const classes = useStyles()
    const location = useLocation()
    return(
        <div>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/'>
                        <img src={logo} alt="Vogg" height="100px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow} />

                    {location.pathname !== '/cart' ? (  // if user is on the cart page, they won't be show the cart icon
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    ) : null }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar