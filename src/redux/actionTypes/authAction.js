export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = (email, password) => async (dispatch) => {
  try {
    let res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    dispatch({type: LOGIN_SUCCESS, payload: data.token})
  } catch (e) {
    console.log(e);
  }
};
