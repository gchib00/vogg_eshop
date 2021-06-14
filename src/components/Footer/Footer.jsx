import React from 'react'
import { Typography, Divider, IconButton } from '@material-ui/core'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import css from './Footer.module.css'


function Footer() {

    return(
        <div>
            <footer className={css.footer}>
                <MapContainer center={[41.7547879, 44.7866833,]} zoom={10} scrollWheelZoom={true}>
                    <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[41.72001426801937, 44.77638361712727]} />
                    <Marker position={[41.81675319526235, 44.772420444257584]} />
                    <Marker position={[41.71039214615007, 44.79684627671317]} />
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
                    <p><strong>ტელ: </strong>+995 32 221 29 01</p>
                    <Divider />
                    <p><strong>E-mail: </strong>voggshoesmaker@gmail.com</p>
                </div>
                <div className={css.placeHolder}></div>
            </footer>
        </div>
    )
}

export default Footer