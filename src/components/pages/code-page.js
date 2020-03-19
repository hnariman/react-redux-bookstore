import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CodePage = ({ total, code }) => {
    if (total === 0) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="col-md-6 code-alert">
            <h1>Your order code {code} has been placed</h1>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart: { orderTotal }, paymentList: { code }}) => {
    return {
        total: orderTotal,
        code
    }
}

export default connect(mapStateToProps)(CodePage);

