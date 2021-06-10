import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";

function LoadingScreen() {

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}>
            <BounceLoader size={260} />
        </div>
    )
}

export default LoadingScreen