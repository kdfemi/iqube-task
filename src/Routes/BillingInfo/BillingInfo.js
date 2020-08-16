import React, { Component } from 'react';
import styles from './BillingInfo.module.css';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';

class BillingInfo extends Component {
    render() 
    {
        return  <form action="#">
        <Input name="cardName" label="Name on Card" required type="text"/>

        <Dropdown label="Card Type" name="cardtype" options={['Visa', 'Master', 'Verve']} required/>      

        <div className={styles.card}>
            <div className={styles.cardNo}>
                <Input name="cardno" label="Card Details" type="text" required/>
            </div>
            <div className={styles.security}>
                <div>
                    <Input name="expdate" label="Expiry date" type="text" required/>
                </div>  
                <div>
                    <Input name="cvv" label="CVV" type="text" required/>
                </div>  
            </div>
            <div className={styles.cvv}>   
            </div>
        </div>

        <Button click={() => this.props.history.push('/purchase/confirm-payment')}>Next</Button>
        <Button iscancel="true" style={{display: 'inline-block', marginLeft: '35px'}} 
        click={() => this.props.history.replace('/')}>Cancel Payment</Button>
      </form>
    }
}

export default BillingInfo;