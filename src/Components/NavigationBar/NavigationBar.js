import React from 'react';
import styles from './NavigationBar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationBar = () => {
    return (
        <div style={{padding:'0 5px'}}>
            <nav className={styles.navbar}>
                <NavigationItem exact route="/purchase">Personal Info</NavigationItem>
                <NavigationItem exact route="/purchase/billing-info">Billing Info</NavigationItem>
                <NavigationItem exact route="/purchase/confirm-payment">Confirm Payment</NavigationItem>
            </nav>
        </div>
    )
}

export default NavigationBar