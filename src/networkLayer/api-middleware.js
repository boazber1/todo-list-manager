import { takeEvery } from "redux-saga"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import setAuthorizationToken from "../Auth/setAuthorizationToken"
import { loginSucceed, loginFailed
      , registerSucceed, registerFailed} from "../actions/userActions"
import jwt_decode from "jwt-decode";




export function* loginAsync(action) {
  try {
      const { data } = yield call(axios.post
                                  , "http://todos.moonsite.co.il/api/login"
                                  , action.payload);

      const token = data.token.split(" ")[1];
      setAuthorizationToken(token);
      yield put(loginSucceed(jwt_decode(token)));

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

export default function* rootSaga() {
    yield [ watchUserAuth(), ];
}
