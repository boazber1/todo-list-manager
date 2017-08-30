export const userReducer = function (state = {}, action) {
    var { type } = action;

    switch (type) {

      case "USER_REGISTER_PENDING":
      case "USER_LOGIN_PENDING":
        state = {...state, loading: true};
        break;
      case "USER_REGISTER_FULFILLED":
      case "USER_LOGIN_FULFILLED":
        var { payload } = action;
        state = {...state, loading: false, user: payload }
        break;
      case "USER_REGISTER_REJECTED":
      case "USER_LOGIN_REJECTED":
        var { payload } = action;
        state = {...state, loading: false, message: "Error during log in process " + payload }
        break;
      case "USER_LOGOUT":
        state = {...state, user: null}
        break;
    }
    return state;
}

export const todoReducer = function (state = {}, action) {
    var { type } = action;
    switch (type) {
      case "TODO_FATCH_PENDING":
        state = {...state, loading: true}
        break;
      case "TODO_FATCH_FULFILLED":
        var { payload } = action;
        state = {...state, todos: payload, loading: false};
        break;
      case "TODO_FATCH_REJECTED":
        state = {...state, todos: [], loading: false};
        break;
      case "TODO_CREATE_PENDING":
        state = {...state, loading: true};
        break;
      case "TODO_CREATE_FULFILLED":
        var { payload } = action;
        state = {...state, loading: false, todos: state.todos.concat()};
        state.todos.push(payload);
        break;
      case "TODO_CREATE_REJECTED":
        var { payload } = state;
        state = {...state, loading: false, error: payload }
        break;
      case "TODO_SET_PENDING":
        state = {...state, loading: true }
        break;
      case "TODO_SET_FULFILLED":
        var { payload } = action
        state = {...state, loading: false,  todos: state.todos.filter((row) => {
                                                  return row._id !== payload._id;
                                                })};
        state.todos.push(payload);
        break;
      case "TODO_SET_REJECTED":
        var { payload } = action;
        state = {...state, loading: false, error: payload };
        break;
      case "TODO_DELETE_PENDING":
        state = {...state, loading: true};
        break;
      case "TODO_DELETE_FULFILLED":
        var { payload } = action;
        state = {...state, loading: false, todos: state.todos.filter((row) => {
                                                  return row._id !== payload.id;
                                                })};
        break;
      case "TODO_DELETE_REJECTED":
        var { payload } = action;
        state = {...state, loading: false, error: payload };
        break;
    }
    return state;
}
