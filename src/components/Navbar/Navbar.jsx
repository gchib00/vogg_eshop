import React from 'react'
import { Typography, Button, Badge, IconButton, Toolbar, AppBar } from '@material-ui/core'
// import { ContactSupportIcon } from '@material-ui/icons'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

import logo from '../../assets/logo.png'
import useStyles from './styles'


function Navbar({ totalItems }) {
    const classes = useStyles()
    return(
        <div>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography style={{ marginBottom:'-6px' }}>
                        <img src={logo} alt="Vogg" height="100px" className={classes.image}/>
                    </Typography>

                    <div className={classes.grow} />

                    <IconButton>
                            <ContactSupportIcon fontSize='large' color='action' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar