import { all } from 'redux-saga/effects';
import mediaSaga from './Media/saga';


export default function* rootSaga(getState) {
    yield all([
        mediaSaga()
    ]);
}
