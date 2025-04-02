import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "http://10.101.14.224:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
export const BASE_URL_ADMIN = axios.create({
  baseURL: "http://10.101.14.224:8080/api/v1/admin",
  headers: {
    "Content-Type": "application/json",
  },
});
export const BASE_URL_AUTH = axios.create({
  baseURL: "http://10.101.14.224:8080/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
// laay token
// const token = Cookies.get("token");
// const
