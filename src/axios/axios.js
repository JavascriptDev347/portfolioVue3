import axios from "axios";
import router from "@/router";

const url = "https://portfolio-bakcend.herokuapp.com/api/v1/";

const http = axios.create({
  baseURL: url,
});

http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // config.headers["Lan  guage"] = localStorage.getItem("lang")
    config.headers["Accept"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push("/login").then();
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default http;
