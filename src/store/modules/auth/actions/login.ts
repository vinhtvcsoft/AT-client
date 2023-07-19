import { call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import request from "store/helpers/request";
import { login } from "services/api/user";
import { loginRequest, requestFailure, requestSuccess } from "../reduder";

export const loginNotifier = (params: any = {}, onSuccess, onFailure) => {
  return {
    type: loginRequest.type,
    loader: true,
    payload: params,
    onSuccess,
    onFailure,
  };
};

export function* loginAction({ payload, ...props }: PayloadAction<any>) {
  yield call(request, {
    service: login,
    params: { ...payload },
    cancelId: `${props.type}`,
    type: props.type,
    onSuccess: props["onSuccess"],
    onFailure: props["onFailure"],
    failureAction: requestFailure,
    successAction: requestSuccess,
  });
}
