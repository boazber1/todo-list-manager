import { takeEvery } from "redux-saga"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import setAuthorizationToken from "../Auth/setAuthorizationToken"
import { loginSucceed, loginFailed } from "../actions/userActions"
import jwt_decode from "jwt-decode";


export function* loginAsync(action) {
  try {
      const { data } = yield call(axios.post
                                  , "http://todos.moonsite.co.il/api/login"
                                  , action.payload);

      const token = data.token;
      setAuthorizationToken(token);
      yield put(loginSucceed(jwt_decode(token)));

  } catch (error) {
      setAuthorizationToken(null);
      yield put(loginFailed(error));
  }
}

export function* watchLogin () {
  console.log("Using saga!!!!");
  yield takeEvery("USER_LOGIN_PENDING", loginAsync);
}

export default function* rootSaga() {
    yield [ watchLogin(), ];
}
