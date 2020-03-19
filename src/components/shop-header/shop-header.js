import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({total = 0, count = 0}) => {
  
  return (
    <header className="shop-header row">
      <div className="container"> 
      <Link to="/">
        <span className="logo">BookStore</span>
      </Link>
      <Link to="/cart">
        <span className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {count} items (${total})
        </span>
      </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, totalQuantityOfItems }}) => {
  return {
    total: orderTotal,
    count: totalQuantityOfItems
  }
}

export default connect(mapStateToProps)(ShopHeader);
