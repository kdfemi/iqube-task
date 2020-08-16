import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SuccessfulContainer from './Containers/Successful/Successful';
import PurchaseContainer from './Containers/Purchase/Purchase';

function App() {
  return (
    <div className="app">
      <div className={'container'}>
        <Switch>
          <Route path="/purchase" component={PurchaseContainer}/>
          <Route path="/successful" component={SuccessfulContainer}/>
          <Redirect from="/" to="/purchase"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
