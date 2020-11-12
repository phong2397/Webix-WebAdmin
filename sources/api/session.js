import {
  removeUserId,
  saveUserId,
  saveAccessToken,
  removeAccessToken,
} from "../models/storage";

const { host, port } = require("./config").apiServer;

function status() {
  // return false;
  return webix
    .ajax()
    .post(`http://${host}:${port}/backend/loginStatus`)
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
    .post(`http://${host}:${port}/auth/login`, {
      username: username,
      password: password,
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
    .post(`http://${host}:${port}/backend/logout`)
    .then((a) => a.json());
}

export default {
  status,
  login,
  logout,
};
