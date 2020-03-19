const updateTotalCost = (state, deliveryCost) => {
    console.log(`updateTotalCost() ${deliveryCost}`);
    return {
        deliveryCost
    }
}

const generateRandomCode = () => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let code = '';
    while (code.length < 8) {
        code += abc[Math.floor(Math.random() * abc.length)];
    }
    code = code.toUpperCase();
    console.log(code);
    return {
        code
    }
}

const updatePaymentList = (state, action) => {
    if (state === undefined) {
        return {
            deliveryCost: 0
        }
    }

    switch(action.type) {
        case 'EXPRESS_DELIVERY_HAS_CHOSEN':
            return updateTotalCost(state, action.payload);

        case 'PICK_UP_HAS_CHOSEN':
            return updateTotalCost(state, action.payload);

        case 'GENERATE_RANDOM_CODE':
            return generateRandomCode();
        
        default:
            return state.paymentList;
    }
}

export default updatePaymentList;