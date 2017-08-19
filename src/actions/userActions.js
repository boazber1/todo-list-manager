import axios from "axios";
import setAuthororizationToken from "../Auth/setAuthorizationToken";
import jwt_decode from "jwt-decode";


export function login(data) {
  return dispatch => {
    dispatch({type: "USER_LOGIN_PENDING"});
    return axios.post("http://todos.moonsite.co.il/api/login", data).then(response => {
      const token = response.data.token;
      setAuthororizationToken(token);
      dispatch({type: "USER_LOGIN_FULFILLED", payload: jwt_decode(token)});
    })
    .catch(error => {
      dispatch({type: "USER_LOGIN_REJECTED", payload: error});
    });
  };
}
