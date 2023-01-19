import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom'
import MachineItem from "../MachineItem";
import Navbar from '../Navbar'
import BeerImage from '../../assets/beer.png'

import {data} from '../../Data'

import './Beer.css'

const Beer = (props) => {

    const [beers, setBeers] = useState([])

    const handleClick = (beer) => {
        setBeers([...beers, beer])
    }

    console.log(beers)

    return (
        <Fragment>
            <Navbar/>
            <div className='    page'>
            <p>Stout: {beers.filter(beers => beers === 'stout').length}</p>
            <p>Lager: {beers.filter(beers => beers === 'lager').length}</p>
            <p>Pilsner: {beers.filter(beers => beers === 'pilsner').length}</p>
            <p>Porter: {beers.filter(beers => beers === 'porter').length}</p>
                <div className='page__items'>
                    {data.beer.map(beer => {
                        return <MachineItem key={beer} type={beer} image={BeerImage} onClick={() => handleClick(beer)}/>
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
