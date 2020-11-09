import {
    removeUserId,
    saveUserId,
    saveAccessToken,
    removeAccessToken,
} from "./storage";

function status() {
    // return false;
    return webix
        .ajax()
        .post("http://150.95.110.211:3000/backend/login/status")
        .then((a) => {
            a.json();
        });
}

function login(username, password) {
    return webix
        .ajax()
        .headers({
            "Content-type": "application/json",
        })
        .post("http://150.95.110.211:3001/auth/login", {
            username: username,
            password: password
        })
        .then((a) => {
            saveAccessToken(a.json().accessToken);
            saveUserId(a.json().customerId);
            return a.json();
        });
}

function logout() {
    console.log("Log out is here !!");
    removeUserId();
    removeAccessToken();
    return webix
        .ajax()
        .post("http://150.95.110.211:3000/backend/logout")
        .then((a) => a.json());
}

export default {
    status,
    login,
    logout,
};