import React, { Component } from "react";
import styles from "./PersonalInfo.module.css";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Dropdown from "../../Components/Dropdown/Dropdown";

class PersonalInfo extends Component {
  render() {
     
    return (
      <form action="#">
        <Input name="name" label="Name" type="text"/>

        <Input name="email" label="Email Address" required extra="The purchase receipt would be sent to this address" type="email"/>

        <Input name="address1" label="Address 1" type="text"/>

        <Input name="address2" label="Address 2" type="text"/>

        <div className={styles.stateFields}>
            <div className={styles.lga_wrapper}>
                <Input name="lga" label="Local Government" type="text"/>
            </div>
            <div className={styles.state_wrapper}>   
            <Dropdown label="State" name="state" options={['Lagos', 'Abuja', 'Akure']}/>      
            </div>
        </div>

        <Button click={() => this.props.history.push('/purchase/billing-info')}>Next</Button>
        <Button iscancel="true" style={{display: 'inline-block', marginLeft: '35px'}} 
        click={() => this.props.history.replace('/')}>Cancel Payment</Button>
      </form> 
    );
  }
}

export default PersonalInfo;
