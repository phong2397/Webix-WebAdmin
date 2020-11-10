const {host, port} = require('./config').apiServer;
import { getAccessToken } from '../models/storage';

export function getCompany() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })
    .get(`http://${host}:${port}/backend/companies`)
    .then((data) => data.json());
}