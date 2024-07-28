import axios from "axios";

// export const BASE_URL = import.meta.env["BASE_URL"];
const BASE_URL = "https://solid-rat-production.up.railway.app";

export const aixosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

aixosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      // eslint-disable-next-line
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default aixosInstance;
