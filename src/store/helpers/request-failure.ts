import { put, call } from 'redux-saga/effects';

export default function* requestFailure({
    failureAction,
    data,
    status,
    callback,
    onFailure,
    componentId
}) {
    switch (status) {
        case 403:
            // TODO: Define what to do on 403
            break;
        case 401:
            // TODO: Define what to do on 401
            break;
        case 408:
            // TODO: Define what to do on 408
            break;
        default:
            break;
    }
    yield put(failureAction({ componentId, ...data }));
    if (callback) yield call(callback, { ...data });
    if (onFailure) yield call(onFailure, { ...data });
}
