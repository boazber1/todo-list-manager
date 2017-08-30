export function getTodos() {
  return {type: "TODO_FATCH_PENDING"};
}

export function getTodoSucceed(todoList) {
  return {type: "TODO_FATCH_FULFILLED", payload: todoList };
}

export function getTodoFailed(error) {
  return {type: "TODO_FATCH_REJECTED", payload: error };
}

export function createTodo(todoData) {
  return {type: "TODO_CREATE_PENDING", payload: todoData};
}

export function createTodoSucceed(todo) {
  return {type: "TODO_CREATE_FULFILLED", payload: todo};
}

export function createTodoFailed(error) {
  return {type: "TODO_CREATE_REJECTED", payload: error};
}

export function deleteTodo(id) {
  return {type: "TODO_DELETE_PENDING", payload: id };
}

export function deleteTodoSucceed(id) {
  return {type: "TODO_DELETE_FULFILLED", payload: id};
}

export function deleteTodoFailed(error) {
  return {type: "TODO_DELETE_REJECTED", payload: error };
}
