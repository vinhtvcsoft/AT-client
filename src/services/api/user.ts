import { axiosClient } from "utils/axios"

export interface IGetUserResponse {
  operatorid: string
  password: string
}

export const login = async (params) => {
  return await axiosClient.post('/user/login',params);
}

export const getUser = async () => {
  return await axiosClient.get('/user');
}

export const refereshToken = async (params) => {
  return await axiosClient.post('/user/refresh',params);
}
