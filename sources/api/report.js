const { host, port } = require("./config").apiServer;
import { getAccessToken } from "../models/storage";

export function getReport() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })
    .get(`http://${host}:${port}/backend/reports`)
    .then((data) => data.json());
}