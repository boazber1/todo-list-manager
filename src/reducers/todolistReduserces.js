export const userReducer = function (state = {}, action) {
    var { type } = action;

    switch (type) {
      case "USER_LOGIN_PANDING":
        state = {...state, loading: true};
        break;
      case "USER_LOGIN_FULFILLED":
        var { payload } = action;
        state = {...state, loading: false, user: payload }
        break;
      case "USER_LOGIN_REJECTED":
        var { payload } = action;
        state = {...state, loading: false, message: "Error during log in process " + payload }
        break;
    }
    return state;
}
