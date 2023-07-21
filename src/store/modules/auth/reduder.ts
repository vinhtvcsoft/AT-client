/** @format */
import { createSlice } from "@reduxjs/toolkit";
import { getKey } from "services/localStorage";

interface IAuthentication {
  authToken: string;
  refreshToken: string;
  operations: string;
  roleid: string;
  employee: string;
  loading: boolean;
  error: any;
  message: string;
}
const authToken = getKey("authToken") || "";
const refreshToken = getKey("refreshToken") || "";
const userStorage = getKey("user");
const user = userStorage ? JSON.parse(userStorage) : {};

const initialState: IAuthentication = {
  authToken: authToken,
  refreshToken: refreshToken,
  operations: user.operations,
  roleid: user.roleid,
  employee: user.employee,
  loading: false,
  error: null,
  message: "",
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => ({
      ...state,
      error: null,
      message: "",
      loading: true,
    }),
    loginSuccess: (state, { payload }) => {
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
        operations: payload.operations,
        roleid: payload.roleid,
        employee: payload.employee,
        loading: false,
      };
    },
    requestFailure: (state, { payload }) => ({
      ...state,
      error: payload.message,
      message: "",
      loading: false,
    }),
    requestSuccess: (state, { payload }) => ({
      ...state,
      error: null,
      message: payload.message,
      loading: false,
    }),
  },
});

const { actions, reducer } = slice;
const { loginRequest, loginSuccess, requestFailure, requestSuccess } = actions;

export { loginRequest, loginSuccess, requestFailure, requestSuccess };
export type { IAuthentication };
export default reducer;
