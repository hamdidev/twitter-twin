import React from 'react'
import '../styles/sideoption.css'
const SideOption = ({active, text, Icon}) => {
    return (
        <div className={`sideoption ${ active && 'sideoption__active'}` }>
            <Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default SideOption
