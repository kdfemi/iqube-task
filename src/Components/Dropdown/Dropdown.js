import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = props => (
    <>
        <label htmlFor={props.name}>{props.label}{props.required? <em>&#x2a;</em> : null}</label>
        {props.extra? <small>{props.extra}</small> : null}
        <select id={props.name} name={props.name}>
            {
                props.options.map(option => <option key={option + parseInt(Math.random()) }>{option}</option>)
            }
        </select>
    </>
);

export default Dropdown;