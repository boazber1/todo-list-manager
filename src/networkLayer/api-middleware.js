import { takeEvery } from "redux-saga"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import setAuthorizationToken from "../Auth/setAuthorizationToken"
import { loginSucceed, loginFailed
      , registerSucceed, registerFailed} from "../actions/userActions"
import jwt_decode from "jwt-decode";
import {
  getTodoSucceed,
  getTodoFailed,
  createTodoSucceed,
  createTodoFailed,
  deleteTodoSucceed,
  deleteTodoFailed,
  saveTodoSucceed,
  saveTodoFailed
} from '../actions/todolistActions';

import { sessionService } from "redux-react-session"


export function* loginAsync(action) {
  try {
      const { data } = yield call(axios.post
                                  , "http://todos.moonsite.co.il/api/login"
                                  , action.payload);

      const token = data.token.split(" ")[1];
      setAuthorizationToken(token);
      let user = jwt_decode(token);

      sessionService.saveSession({ token });
      sessionService.saveUser({...user, token});

      yield put(loginSucceed(user));
  } catch (error) {
      setAuthorizationToken(null);
      yield put(loginFailed(error));
  }
}

export function* registerAsync(action) {
  try {
      const { data } = yield call(axios.post
                                  , "http://todos.moonsite.co.il/api/register"
                                  , action.payload);

      const token = data.token.split(" ")[1];
      setAuthorizationToken(token);
      yield put(registerSucceed(jwt_decode(token)));

  } catch (error) {
      setAuthorizationToken(null);
      yield put(registerFailed(error));
  }
}

export function* watchUserAuth () {
  yield takeEvery("USER_LOGIN_PENDING", loginAsync);
  yield takeEvery("USER_REGISTER_PENDING", registerAsync);
}


export function* getTodosAsync(action) {
  try {
    const { data } = yield call(axios.get
                              , "http://todos.moonsite.co.il/api/tasks"
                          );
    console.log(data);
    const { tasks } = data;
    yield put(getTodoSucceed(tasks));
  } catch (e) {
    yield put(getTodoFailed(e));
  }
}

export function* createTodosAsync(action) {
  try {
    const { data } = yield call(axios.post
                              , "http://todos.moonsite.co.il/api/tasks"
                              , action.payload
                            );
    const { task } = data;
    yield put(createTodoSucceed(task))
  } catch (e) {
    yield put(createTodoFailed(e))
  }
}

export function* deleteTodosAsync(action) {
  try {
    const { data } = yield call(axios.delete
                                , `http://todos.moonsite.co.il/api/tasks/${action.payload.id}`);
    yield put(deleteTodoSucceed(action.payload));
  } catch(e) {
    yield put(deleteTodoFailed(e));
  }
}

export function* setTodosAsync(action) {
  try {
    const { data } = yield call(axios.put
                                , `http://todos.moonsite.co.il/api/tasks/${action.payload.id}`
                                , action.payload);
    const { task } = data;
    yield put(saveTodoSucceed(task));
  } catch (e) {
    yield put(saveTodoFailed(e));
  }
}


export function* watchTodos() {
    yield takeEvery("TODO_FATCH_PENDING", getTodosAsync);
    yield takeEvery("TODO_CREATE_PENDING", createTodosAsync);
    yield takeEvery("TODO_DELETE_PENDING", deleteTodosAsync);
    yield takeEvery("TODO_SET_PENDING", setTodosAsync);
}

export default function* rootSaga() {
    yield [ watchUserAuth(), watchTodos(), ];
}
