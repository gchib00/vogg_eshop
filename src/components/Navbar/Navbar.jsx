import React from 'react'
import { Typography, Menu, MenuItem, Badge, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.png'
import useStyles from './styles'


function Navbar() {
    const classes = useStyles()
    return(
        <div>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography>
                        <img src={logo} alt="Vogg" height="100px" className={classes.image}/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.grow} />
        </div>
    )
}

export default Navbar