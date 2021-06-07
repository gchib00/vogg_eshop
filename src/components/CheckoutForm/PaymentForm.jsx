import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElements, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

function PaymentForm () {
    return(
        <div>
            <Review />
        </div>
    )

}

export default PaymentForm