import { Typography, Divider } from '@material-ui/core'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import css from './Footer.module.css'


function Footer() {

    return(
        <div>
            <footer className={css.footer}>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} height='200px'>
                    <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]} />
                </MapContainer>
                <div className={css.addresses}>
                    <Typography align='left' style={{ fontWeight: 'bold' }}>
                        მისამართი
                    </Typography>
                    <br />
                    <div className={css.address}>
                        <p>პეკინის გამზირი, თბილისი</p>
                        <p>11:00 - 21:00</p>
                    </div>
                    <Divider />
                    <div className={css.address}>
                        <p>104, დავით აღმაშენებელის გამზირი, თბილისი</p>
                        <p>10:30 - 21:00</p>
                    </div>
                    <Divider />
                    <div className={css.address}>
                        <p>"თბილისი" მოლი, დავით აღმაშენებლის ხეივანი, თბილისი</p>
                        <p>10:00 - 20:00</p>
                    </div>
                </div>
                <div className={css.contact}>
                    <Typography align='left' style={{ fontWeight: 'bold' }}>
                        კონტაქტი
                    </Typography>
                    <br />
                    <p><strong>E-mail: </strong>voggshoesmaker@gmail.com</p>
                    <Divider />
                    <p><strong>Tel: </strong>+995 32 221 29 01</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer