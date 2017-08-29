import { push } from "react-router-redux"

export function gotoLogin() {
  return push('/login');
}

export function gotoRegister() {
  return push("/register");
}

export function gotoTodoManager() {
  return push("/todo-list");
}
