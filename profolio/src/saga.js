import {takeLatest, call, put, takeEvery} from 'redux-saga/effects';
import CONSTANT from './constants';
import {setUser} from './api'
export default function *rootSaga() {
    yield takeEvery(CONSTANT.ACTION_CONSTANT.GET_INFOR,getUser)
}
function *getUser() {
    try {
        const user = yield call(setUser);
        yield put({type:CONSTANT.ACTION_CONSTANT.GET_USER,payload:user});
    } catch (error) {
        yield put ({type:CONSTANT.ACTION_CONSTANT.ERROR,error})
    }
}
