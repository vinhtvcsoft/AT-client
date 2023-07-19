import { all } from 'redux-saga/effects';
import authWatcher from './modules/auth/watcher';

export default function* rootSaga() {
    yield all([
      ...authWatcher,
    ]);
  }
  