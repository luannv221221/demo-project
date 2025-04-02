import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_AUTH } from "../api";
import Cookies from "js-cookie";
export const login = async ({ username, password }) => {
  const response = await BASE_URL_AUTH["post"]("/login", {
    username,
    password,
  });
  // luu vao cookie
  Cookies.set("token", response.data.accessToken, { expires: 7 });
  // luu ten
  Cookies.set("username", response.data.username, { expires: 7 });
  Cookies.set("roles", JSON.stringify(response.data.roles), { expires: 7 });
  return response;
};
