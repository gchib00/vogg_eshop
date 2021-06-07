import React, { useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormInput from './FormInput'

function AddressForm ({ next }) {
    const methods = useForm()

    const [shippingCountry, setShippingCountry ] = useState('Georgia')
    const [shippingCity, setShippingCity] = useState('Tbilisi')

    const [value, setValue] = useState('TEST ITEM')

    return(
        <div>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={ methods.handleSubmit( (data) =>  next({ ...data, shippingCountry, shippingCity  })) }>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                        <FormInput required name='lastName' label='Last Name' />
                        <FormInput required name='phoneNumber' label='Phone number' />
                        <FormInput required name='address' label='Address' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth>
                                <MenuItem value={shippingCountry}>
                                    {shippingCountry}
                                </MenuItem>
                            </Select>
                            <Typography><br></br></Typography>
                            <InputLabel>City</InputLabel>
                            <Select value={shippingCity} fullWidth>
                                <MenuItem value={shippingCity}>
                                    {shippingCity}
                                </MenuItem>
                            </Select>
                        </Grid>                      
                    </Grid>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to='/cart' variant='outlined'>Back</Button>
                        <Button type='submit' variant='contained' color='primary'>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )

}

export default AddressForm