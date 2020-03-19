import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart } from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete, onPurchaseButtonClicked }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    const orderTotal = total.toFixed(2);
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${orderTotal}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  if (total === 0) {
    return (
      <div>
        <h3>Your shopping cart is empty</h3>
        <Link to="/">
          <button
            className="shopping-button btn btn-info add-to-cart">
          Start shopping
        </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
        <Link to="/payment">
          <button
            onClick={onPurchaseButtonClicked}
            className="btn btn-info add-to-cart">
          Continue
        </button>
        </Link>
      </div>
    </div>
  );

};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
