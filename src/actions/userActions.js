import axios from "axios";
import setAuthororizationToken from "../Auth/setAuthorizationToken";
import jwt_decode from "jwt-decode";


export function login(loginData) {
    return {type: "USER_LOGIN_PENDING", payload: loginData};
}
