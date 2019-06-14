import React from 'react';
import './Backdrop.css';

const Backdrop = ({show, clicked}) => show ? 
    <div className="Backdrop" onClick={clicked}></div> : null

export default Backdrop;