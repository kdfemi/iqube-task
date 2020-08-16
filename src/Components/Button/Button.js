import React from 'react';
import styles from './Button.module.css'

const Button = props => <button 
className={props.iscancel ? styles['cancel_btn'] : '' } 
onClick={props.click} style={props.style}>{props.children}</button>

export default Button;