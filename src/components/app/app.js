import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import Footer from '../footer';
import { HomePage, CartPage, PaymentPage, CodePage } from '../pages';

import './app.css';

const App = () => {
  return (
    <div> 
      <ShopHeader/>
      <main role="main" className="container">
      
      
        <Switch>
          <Route
            path="/"
            component={HomePage}
            exact />

          <Route
            path="/cart"
            component={CartPage}
            />
            
          <Route
            path="/payment"
            component={PaymentPage}
            />

          <Route
            path="/code"
            component={CodePage}
            />
        </Switch>
        
      </main>
      <Footer/>
    </div>
  );
};

export default App;
