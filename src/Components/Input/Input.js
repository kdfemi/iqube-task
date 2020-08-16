import React from 'react';
import styles from './Input.module.css';

const Input = props => (
    <>
        <label htmlFor={props.name}>{props.label} {props.required? <em>&#x2a;</em> : null}</label>
        {props.extra? <small>{props.extra}</small> : null}
        <input id={props.name} name={props.name} type={props.type} />
    </>
);

export default Input;