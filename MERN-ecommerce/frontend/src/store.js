import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducers';
import  { productListReducer,productDetailsReducer }  from './Reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './Reducers/userReducer';

const initialState = {
  userSignin:{
    userInfo: localStorage.getItem('userInfo')
      ?JSON.parse(localStorage.getItem('userInfo'))
      : null
  },
  cart: {
    cartItems: localStorage.getItem('cartItems') ?
      JSON.parse(localStorage.getItem('cartItems'))
      : [],
  }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userSignin : userSigninReducer,
  userRegister: userRegisterReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;