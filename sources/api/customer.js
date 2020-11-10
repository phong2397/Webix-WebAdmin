const { host, port } = require("./config").apiServer;
import { getAccessToken } from "../models/storage";

export function getCustomer() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })

    .get(`http://${host}:${port}/backend/customers`)
    .then((data) => data.json());
}
