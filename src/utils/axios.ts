import axios from "axios";
import { useKey } from "hooks";
import { KEY_CONTEXT } from "./data";
import {
  getAuthentication,
  getKey,
  removeKey,
  setKey,
} from "services/localStorage";

let subscribers: any[] = [];

const logout = () => {
  removeKey("authToken");
  removeKey("rereshToken");
  removeKey("user");
  window.location.href = "/login";
};

const config = {
  baseURL: process.env.REACT_APP_BASE_URI,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(config);

const refreshAccessToken = async () => {
  const authToken = getKey("authToken");

  if (!authToken) logout();
  if (subscribers.length > 1) return;

  const refreshToken = getKey("refreshToken");

  try {
    //IF refresh method more then 5 seconds => Logout
    const timeout = setTimeout(() => {
      logout();
    }, 5000);

    const requestInstance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URI,
      headers: {
        x_authorization: authToken,
      },
    });
    const response = await requestInstance.post("user/refresh", {
      refreshToken: refreshToken,
    });

    clearTimeout(timeout);

    if (response.status === 200) {
      setKey("authToken", response.data.accessToken);

      await Promise.all(
        subscribers.map(async ({ originalRequest, resolve }) => {
          originalRequest.headers["Authorization"] =
            "Bearer " + response.data.accessToken;
          resolve(axios(originalRequest));
        })
      );

      subscribers = [];

      return response.data.accessToken;
    } else {
      logout();
    }
  } catch (error) {
    logout();
  }
};

axiosClient.interceptors.request.use(
  async (req: any) => {
    const { getKey } = useKey();
    const token = getKey("authToken");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (err: any) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
  (res: any) => Promise.resolve(res.data),
  async (error: any) => {
    const originalRequest = error.config;

    if (
      error &&
      error.response &&
      error.response.status === 401 &&
      originalRequest?.url !== "/user/login"
    ) {
      console.log(">>>401");
      const retryOrigReq = new Promise((resolve) => {
        subscribers.push({ originalRequest, resolve });
        refreshAccessToken();
      });
      return retryOrigReq;
    }
    return Promise.reject(error);
  }
);

const destroyToken = async () => {
  try {
    const requestInstance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URI,
    });
    const response = await requestInstance.post("user/destroytoken", {
      refreshToken: "zzz",
    });
  } catch (error) {
    console.log(error);
  }
};

export { axiosClient, refreshAccessToken };
