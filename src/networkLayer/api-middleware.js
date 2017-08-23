import { takeEvery } from "redux-saga"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import setAuthorizationToken from "../Auth/setAuthorizationToken"
import jwt_decode from "jwt-decode";

export function* loginAsync(action) {
  try {
      const { data } = yield call(axios.post, "http://todos.moonsite.co.il/api/login", action.payload);
      const token = data.token;
      setAuthorizationToken(token);
      yield put({type: "USER_LOGIN_FULFILLED", payload: jwt_decode(token)});
  } catch (e) {
      yield put({type: "USER_LOGIN_REJECTED", payload: e});
  }
}

export function* watchLogin () {
  console.log("Using saga!!!!");
  yield takeEvery("USER_LOGIN_PENDING", loginAsync);
}

export default function* rootSaga() {
    yield [ watchLogin(), ];
}
