import React, {useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'

import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'


const steps = ['Shipping address', 'Payment details']

function Checkout() {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})

    function Form() {
        return(
        (activeStep === 0) ? 
            <AddressForm next={next}/>
        :
            <PaymentForm shippingData={shippingData} />
    
        )
    }

    function next(data) {
        setShippingData(data)
        nextStep()
    }

    function nextStep() {
        setActiveStep((prevStep) => prevStep+1)
    }
    function backStep() {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep-1)
        }
    }

    function Confirmation() {
        return(
            <div>
                fake confirmation page
            </div>
        )
    }

    return(
        <div>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => 
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )}
                    </Stepper>
                    { (activeStep === 2) ? <Confirmation /> : <Form /> }
                </Paper>
            </main>
        </div>
    )
}

export default Checkout