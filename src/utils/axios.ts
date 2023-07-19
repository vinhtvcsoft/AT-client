import axios from "axios";
import { useKey } from "hooks";
import { KEY_CONTEXT } from "./data";
import { getAuthentication, removeKey, setKey } from "services/localStorage";

let subscribers: any[];
const logout = () => {
  removeKey("auth");
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

axiosClient.interceptors.request.use(
  async (req: any) => {
    const { getKey } = useKey();
    // const token = getKey(KEY_CONTEXT.AUTH_TOKEN);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJuYW1lIjoiUEhWQEFUIn0sImlhdCI6MTY4OTMxMDg1OCwiZXhwIjoxNjg5MzExNDU4fQ.zn_YzPC7vyJQNaJ6jJHO5KBTITZDgVWCWhk56n9fyQs";
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (err: any) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
  (res: any) => {
    console.log(">>>", res);
    return Promise.resolve(res);
  },
  async (error: any) => {
    const originalRequest = error.config;

    if (
      error &&
      error.response &&
      error.response.status === 401 &&
      originalRequest?.url !== "/user/login"
    ) {
      const retryOrigReq = new Promise((resolve) => {
        subscribers.push({ originalRequest, resolve });
        refreshAccessToken();
      });
      return retryOrigReq;
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const auth = getAuthentication();

  if (!auth) logout();

  if (subscribers.length > 1) return;

  const { refreshToken, accessToken } = auth;

  try {
    const timeout = setTimeout(() => {
      logout();
    }, 5000);

    const requestInstance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URI,
      headers: {
        x_authorization: accessToken,
      },
    });
    const response = await requestInstance.post("user/refresh", {
      refreshToken: refreshToken,
    });

    clearTimeout(timeout);

    if (response.status === 200) {
      setKey("auth", {
        ...response.data,
        accessToken: response.data.accessToken,
      });

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
