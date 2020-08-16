import React, { Component } from 'react';
import styles from './ConfirmPayment.module.css';
import Button from '../../Components/Button/Button'

class ConfirmPayment extends Component {
    render() 
    {
       return <div className={styles.container}>     
            <div className={styles.table}>
            <div className={[styles.tableHead, styles.row].join(' ')}>
                <h4>Item Name</h4>
                <h4>&#8358; Price</h4>
            </div>
            <div className={[styles.tableItem, styles.row].join(' ')}>
                <p>Data science and usability</p>
                <p>50,000.00</p>
                <p>Shipping</p>
                <p>0.00</p>
            </div>
            <hr/>
            <div className={[styles.tableTotal, styles.row].join(' ')}>
                <p>Total</p>
                <p><b>50,000.00</b></p>
            </div>
        </div>
        <Button click={() => this.props.history.replace('/successful')}>Pay</Button>
        <Button iscancel="true" style={{display: 'inline-block', marginLeft: '35px'}} 
        click={() => this.props.history.replace('/')}>Cancel Payment</Button>
       </div>
    }
}

export default ConfirmPayment;