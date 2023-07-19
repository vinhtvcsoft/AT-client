import { takeLatest } from "redux-saga/effects";
import { loginAction } from "./actions";
import { loginRequest } from "./reduder";

export default [takeLatest(loginRequest, loginAction)];
