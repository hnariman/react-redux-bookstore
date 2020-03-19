import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
    expressDeliveryHasChosen,
    pickUpHasChosen, 
    generateRandomCode} from '../../actions';

import './page.css';

class PaymentPage extends React.Component {
    state = {
        inputValue: '',
        discount: 0
    }

    onChangeInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    checkPromocode = () => {
        if (this.state.inputValue === 'Bookstore') {
            
            this.setState({
                discount: 0.2,
                inputValue: ''
            });
        }
    }

    render() {
        const { total, count, onExpDelInputClick, onPickUpInputClick, onContinueButtonClick, deliveryCost = 0 } = this.props;
        const orderTotal = total * (1 - this.state.discount).toFixed(2);

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
            <div className="payment-page">
                <div className="col-12 col-sm-6 half left">
                    <div className="delivery">
                        <h2 className="title-delivery">Delivery</h2>
                        <div className="payment-choose courier">
                            <input type="radio" name="Choose type of delivery" onClick={() => {
                                // console.log('input has clicked!');
                                onExpDelInputClick()}}/>
                            <span>Express delivery</span>
                        </div>
                        <div className="payment-choose">
                            <input type="radio" name="Choose type of delivery" onClick={onPickUpInputClick}/>
                            <span>Pick up</span>
                        </div>
                    </div>
                    <div className="promocode">
                        <input 
                            onKeyUp={(event) => {
                                if (event.keyCode === 13) {
                                    this.checkPromocode();
                                }
                            }}
                            placeholder='Enter "Bookstore"'
                            value={this.state.inputValue}
                            onChange={this.onChangeInput}/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 half right">
                    <h2>Your cart</h2>
                    <span>{ count } items</span> 
                    <span>Delivery: +${deliveryCost} </span> 
                    <span>Discount: -${(total * this.state.discount).toFixed(2)} </span>
                    <h2>Total: ${ (orderTotal + deliveryCost).toFixed(2) }</h2> 
                    <Link to="/code">
                        <button
                            className="btn btn-info"
                            onClick={onContinueButtonClick}>Continue</button>
                    </Link>
                </div>
            </div>  
        )
    }
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, totalQuantityOfItems }, paymentList: { deliveryCost } }) => {
    return {
        items: cartItems,
        total: orderTotal,
        count: totalQuantityOfItems,
        deliveryCost
    }
}

const mapDispatchToProps = {
    onExpDelInputClick: expressDeliveryHasChosen,
    onPickUpInputClick: pickUpHasChosen,
    onContinueButtonClick: generateRandomCode
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);