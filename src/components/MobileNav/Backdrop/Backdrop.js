import React from 'react'
import './backdrop.scss';

const Backdrop = (props) => {
    return (
        <div onClick={props.close} className="nav-backdrop">

        </div>
    )
}

export default Backdrop