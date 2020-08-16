import React from 'react';

import styles from './Successful.module.css';
import checkmark from './checkmark.svg';
import { Link } from 'react-router-dom';

const SuccessfulContainer = props => {
    console.log('SuccessfulContainer')
    return(
    <div className={styles.container}>
        <div className={styles.message}>
            <div className={styles.img_wrapper}>
            <img src={checkmark}/>
            </div>
            <h2>Purchase Completed</h2>
            <p>Please check your email for details concerning this transaction</p>
            <Link to="/">Return Home</Link>
        </div>
    </div>);
 }

 export default SuccessfulContainer;