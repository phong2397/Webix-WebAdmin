const { host, port } = require("./config").apiServer;
import { getAccessToken } from "../models/storage";

export function getOrder() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })
    .get(`http://${host}:${port}/backend/orders`)
    .then((data) => data.json());
}