
export function login(loginData) {
    return {type: "USER_LOGIN_PENDING", payload: loginData};
}

export function loginSucceed(userData) {
  return {type: "USER_LOGIN_FULFILLED", payload: userData };
}

export function loginFailed(errorData) {
  return {type: "USER_LOGIN_REJECTED", payload: errorData};
}
