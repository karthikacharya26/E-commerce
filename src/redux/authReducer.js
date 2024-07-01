import { LOGIN_SUCCESS, LOGOUT } from "./actionTypes/authAction";

const initialState = {
  isAuth: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, user: action.payload };
    case LOGOUT:
      return { ...state, isAuth: false, user: null };
    default:
      return state;
  }
};
