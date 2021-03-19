import {call, takeEvery, put} from "redux-saga/effects";
import { types } from "../redux/types";
import axios from "axios";
//import {takeEvery} from "redux-saga/effects";
import {fetchDataSuccess} from "../redux/actions";

function* asyncFetchRequest(actions) {
    try {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-02-19&sortBy=publishedAt&apiKey=5626f7f62fdb41158739043323ef64b0'
        const response = yield call(()=>axios.get(url))
        console.log(response.data.articles);
        yield put(fetchDataSuccess(response.data.articles))
    }
    catch(error) {
        console.log(error);
    }
}

export function* watchfetchDataSagas() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}