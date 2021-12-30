import { call, put, takeLatest } from 'redux-saga/effects';
import { getPost } from './api';
import { actions } from '.';

export function* getPostSaga() {
  try {
    const response = yield call(getPost);
    yield put(actions.fetchPostSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostFail(error));
  }
}

export function* BlogPageSaga() {
  yield takeLatest(actions.fetchPostRequest.type, getPostSaga);
}
