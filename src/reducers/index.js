import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import updatePaymentList from './payment';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    paymentList: updatePaymentList(state, action)
  };
};

export default reducer;
