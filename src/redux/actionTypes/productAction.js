export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    let res = await fetch(`http://localhost:3000/products`);
    let data = await res.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_DATA_ERROR });
  }
};
