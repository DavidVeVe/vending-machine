import React, {Fragment, useState} from "react";
import MachineItem from '../MachineItem'
import CoffeeImage from '../../assets/coffee.png'
import {Link} from "react-router-dom";
import Navbar from "../Navbar";

import {data} from '../../Data'

const Beer = (props) => {

    const [coffees, setCoffees] = useState([])

    const handleClick = (coffee) => {
        setCoffees([...coffees,  coffee])
    }

    return (
        <Fragment>
            <Navbar/>
            <div className='page'>
                    <p>Latte: {coffees.filter(coffee => coffee === 'latte').length}</p>
                    <p>Americano: {coffees.filter(coffee => coffee === 'americano').length}</p>
                    <p>Espresso: {coffees.filter(coffee => coffee === 'espresso').length}</p>
                    <p>Cappuccino: {coffees.filter(coffee => coffee === 'cappuccino').length}</p>
                <div className='page__items'>
                    {data.coffee.map(coffee => {
                    return <MachineItem type={coffee} image={CoffeeImage} onClick={() => handleClick(coffee)}/>
                    })}
                </div>
                <div className='page__nav'>
                    {/*<button>Add to</button>*/}
                    <Link to="/">Home</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Beer
