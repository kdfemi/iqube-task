import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import PersonalInfo from '../../Routes/PersonalInfo/PersonalInfo';
import ConfirmPayment from '../../Routes/ConfirmPayment/ConfirmPayment';
import BillingInfo from '../../Routes/BillingInfo/BillingInfo';

const PurchaseContainer = props => {
 console.log('Purchase container')
   return  <>
        <h3 style={{color:'#4E598C', lineHeight: '2.0', margin: '20px auto', paddingLeft: '5px'}}>Complete your Purchase</h3>
        <NavigationBar/>
        <Switch>
            <Route path={"/purchase/billing-info"} component={BillingInfo}/>
            <Route path={"/purchase/confirm-payment"} component={ConfirmPayment}/>
            <Route  path={'/purchase'} component={PersonalInfo}/>
        </Switch>
    </>
}

export default PurchaseContainer