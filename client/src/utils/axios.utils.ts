import axios, { AxiosError, AxiosInstance } from "axios";
import { API_TARGET, API_URL } from "../constants";

const _axios: AxiosInstance = axios.create({
  baseURL: `${API_TARGET}/${API_URL}`,
});

_axios.defaults.headers.post["Content-Type"] = "application/json";

export const setAuthToken = (token: string) => {
  if (!token) {
    delete _axios.defaults.headers.common["Authorization"];
    return;
  }

  _axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

_axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error: AxiosError) {
    if (error.response) throw error.response.data;
    else throw error;
  }
);

export default _axios;
