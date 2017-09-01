import axios from "axios";

export default function setAuthorizationToken(token) {
    if(token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${ token }`;
    }
    else {
      delete axios.defaults.headers.common["Authorization"];
    }

}


export function getAuthorizationToken() {
    return axios.defaults.headers.common["Authorization"];
}
