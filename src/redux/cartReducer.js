import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "./actionTypes/cartAction";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};