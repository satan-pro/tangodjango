import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = "http://127.0.0.1:8000/api/token/";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  Cookies.set("access", response.data.access);
  Cookies.set("refresh", response.data.refresh);
  return response.data;
};

export const logout = () => {
  Cookies.remove("access");
  Cookies.remove("refresh");
};

export const getAccessToken = () => Cookies.get("access");
