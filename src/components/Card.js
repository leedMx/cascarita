import React from 'react'
import './Card.css'

const Card = (_props) => {
    const classes = "card " + _props.className
    return <div className={classes}>{_props.children}</div>
}

export default Card