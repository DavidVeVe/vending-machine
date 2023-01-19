import React from "react";
import Navbar from '../Navbar/'

import './VendingMachine.css'


const VendingMachine = (props) => {
    return (
        <div className='vending-machine'>
            <h1>Vending machine</h1>
            <Navbar />
        </div>
        )
}

export default  VendingMachine
