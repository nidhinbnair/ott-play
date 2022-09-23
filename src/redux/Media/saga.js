import { all, takeEvery, put, call, delay, takeLatest } from 'redux-saga/effects';
import { fetchdata } from '../../constants/helper';
import { pagesDataUrl } from '../../constants/pages';
import actions from './actions';
import { LOAD_DATA } from './types';

function* loadData({ payload: { page } }) {
    if (pagesDataUrl[page]) {
        const data = yield call(fetchdata, pagesDataUrl[page])
        if (data) {
            const { content } = data.page['content-items'];
            yield put(actions.loadMore(content));
        }
    }
}

export default function* mediaSaga() {
    yield all([
        takeEvery(LOAD_DATA, loadData),
    ]);
}
