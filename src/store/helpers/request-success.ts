// import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

export default function* requestSuccess({
    successAction,
    data,
    // redirect,
    callback,
    onSuccess,
    componentId,
}) {
    //Create unique ID for record
    const records = data.data;
    if (Array.isArray(records)) {
        data.data = records.map(((record, index) => ({ ...record, id: index + 1 })));
    }

    yield put(successAction({ componentId, ...data }))
    if (callback) yield call(callback, { ...data });
    if (onSuccess) yield call(onSuccess, { ...data });
}
