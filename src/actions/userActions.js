import setAuthorizationToken from "../Auth/setAuthorizationToken"

export function login(loginData) {
    return {type: "USER_LOGIN_PENDING", payload: loginData};
}

export function loginSucceed(userData) {
  return {type: "USER_LOGIN_FULFILLED", payload: userData };
}

export function loginFailed(errorData) {
  return {type: "USER_LOGIN_REJECTED", payload: errorData};
}

export function logout() {
  setAuthorizationToken(null);
  return {type: "USER_LOGOUT"}
}

export function register(registerData) {
  return {type: "USER_REGISTER_PENDING", payload: registerData};
}

export function registerSucceed(userData) {
  return {type: "USER_REGISTER_FULFILLED", payload: userData};
}

export function registerFailed(errorData) {
  return {type: "USER_REGISTER_REJECTED", payload: errorData};
}
