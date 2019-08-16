import axios from "axios";

import { API_URL } from "./constants";

const httpService = axios.create({
  baseURL: API_URL
});

httpService.interceptors.request.use(req => {
  if (!req.headers["Content-Type"]) {
    req.headers["Content-Type"] = "application/json";
  }

  return req;
});

httpService.interceptors.response.use(response => {
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 202
  ) {
    response.data = response.data.data;
  }
  return response;
});

export { httpService };
