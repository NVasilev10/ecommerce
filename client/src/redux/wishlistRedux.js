const INITIAL_STATE = {
  products: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        products: state.products.filter((p) => p._id !== action.payload),
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
