

export const fatchTodos = function(store) {
  store.dispatch({type: "TODO_FATCH_FULFILLED", payload: [{id: 1 ,task: "task1"}, {id: 2 ,task: "task2"}]});
  store.dispatch({type: "TODO_FATCH_FULFILLED", payload: [{id: 1 ,task: "task1"}, {id: 2 ,task: "task2"}, {id: 3 ,task: "task3"}]});
  store.dispatch({type: "TODO_FATCH_PANDING"});
  store.dispatch({type: "TODO_FATCH_FULFILLED", payload: [{id: 1 ,task: "task1"}, {id: 2 ,task: "task2"}, {id: 3 ,task: "task3"}]});
}


export const createTodos = function(store) {
  store.dispatch({type: "TODO_CREATE_FULFILLED", payload: {id: 4 ,task: "new-task"}});
}

export const deleteTodos = function(store) {
  store.dispatch({type: "TODO_DELETE_FULFILLED", payload: 4});
}
