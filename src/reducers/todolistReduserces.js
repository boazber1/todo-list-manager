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

export const todoReducer = function (state = {}, action) {
    var { type } = action;
    switch (type) {
      case "TODO_FATCH_PANDING":
        state = {...state, loading: true}
        break;
      case "TODO_FATCH_FULFILLED":
        var { payload } = action;
        state = {...state, todos: payload, loading: false};
        break;
      case "TODO_FATCH_REJECTED":
        state = {...state, todos: [], loading: false};
        breakl

    }
    return state;
}
