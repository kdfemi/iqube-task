import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = props => {
    return (

        <NavLink id="nav_link" className={styles['navigation_item']} activeClassName={styles.active} to={{pathname: props.route}} exact={props.exact} >{props.children}</NavLink>
    )
}

export default NavigationItem;