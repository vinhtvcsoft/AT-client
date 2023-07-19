/** @format */
import { createSlice } from '@reduxjs/toolkit';
import { getAuthentication } from 'services/localStorage'

interface IAuthentication {
    accessToken: string
    refreshToken: string
    operations: string
    roleid: string
    employee: string
    loading: boolean
    error: any
    message: string
}

let initialState: IAuthentication;

const authtString = getAuthentication();
if(authtString) {
    const auth = JSON.parse(authtString);

    initialState = {
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        operations: auth.operations,
        roleid: auth.roleid,
        employee: auth.employee,
        loading: false,
        error: null,
        message: '',
    };
}
else {
    initialState = {
        accessToken: '',
        refreshToken: '',
        operations: '',
        roleid: '',
        employee: '',
        loading: false,
        error: null,
        message: '',
    };
}

const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginRequest: state => ({
            ...state,
            error: null,
            message: '',
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
            }
        },
        requestFailure: (state, { payload }) => ({
            ...state,
            error: payload.message,
            message: '',
            loading: false,
        }),
        requestSuccess: (state, { payload }) => ({
            ...state,
            error: null,
            message: payload.message,
            loading: false,
        }),
    }
});

const { actions, reducer } = slice;
const { loginRequest,  loginSuccess, requestFailure, requestSuccess } = actions;

export {
    loginRequest,  loginSuccess, requestFailure, requestSuccess
}
export type {
    IAuthentication
}
export default reducer;