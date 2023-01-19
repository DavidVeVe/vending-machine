import React from 'react'

import './MachineItem.css'


const MachineItem = (props) => {
    return (
        <div className={`item-type ${props.type}`} onClick={props.onClick}>
            <p>
                {props.type}
            </p>
            <img src={props.image} alt={props.type}/>
        </div>
    )
}

export default MachineItem
