const { createStore, combineReducers } = require("redux");

// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CART_ITEMS = "GET_CART_ITEMS"; // Fixed typo from GET_CARD_ITEMS
const ADD_CART_ITEM = "ADD_CART_ITEM";

// products state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// cart state
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

// product actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state; // Fixed missing return
  }
};

// cart actions
const getCartItems = () => { // Fixed function name from getCard
  return {
    type: GET_CART_ITEMS,
  };
};

const addCartItem = (product) => { // Fixed function name from addCart
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

// cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state; // Fixed missing return
  }
};

// combineReducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

// Store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch actions
store.dispatch(getProducts());
store.dispatch(addProduct("milk"));

store.dispatch(getCartItems()); 
store.dispatch(addCartItem("honey"));