import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom'
import MachineItem from "../MachineItem";
import SnackImage from '../../assets/chips.png'
import Navbar from "../Navbar";
import {data} from "../../Data";

const Snacks = (props) => {

    const [snacks, setSnacks] = useState([])

    const handleClick = (snack) => {
        setSnacks([...snacks, snack])
    }

    return (
        <Fragment>
            <Navbar />
        <div className='page'>
            <p>Chips: {snacks.filter(snack => snack === 'chips').length}</p>
            <p>Peanuts: {snacks.filter(snack => snack === 'peanuts').length}</p>
            <p>Cookies: {snacks.filter(snack => snack === 'cookies').length}</p>
            <p>Chocolate: {snacks.filter(snack => snack === 'chocolate').length}</p>
            <div className='page__items'>
                {data.snacks.map(snack => <MachineItem type={snack} image={SnackImage} onClick={() => handleClick(snack)}/>)}
            </div>
            <div className='page__nav'>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
        </Fragment>
    )
}

export default Snacks
