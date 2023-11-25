import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000/v1/",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("token");
    config.headers.Authorization = "Bearer " + accessToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const request = (url, options) => {
  return instance.request({ ...options, url: url });
};
export default request;
