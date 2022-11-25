import './App.css';
import React from 'react';

const ColorBox = (props) => {
  return (
    <div className='colorbox' style={{backgroundColor : props.colorcode}}>"Hi {props.colorcode}"</div>
  )
}

export default ColorBox