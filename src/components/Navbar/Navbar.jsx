import React from 'react'
import { Typography, IconButton, Toolbar, AppBar } from '@material-ui/core'
// import { ContactSupportIcon } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook'
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

                    <div className={classes.facebookBtn}>
                        <IconButton onClick={() => window.open('https://www.facebook.com/VOGGShoesmaker/')}>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar