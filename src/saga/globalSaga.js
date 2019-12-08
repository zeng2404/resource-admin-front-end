import {call, put, take, select} from 'redux-saga/effects'
import axios from "axios";

const reducerName = 'globalReducer'

function* initialBaseUrl() {
   while(true) {
       const action = yield take('INITIAL_BASE_URL');
       try {
           const response = yield call(axios.get,"serverConfig.json");
           yield put({
               type: 'INITIAL_BASE_URL_SUCCESS',
               baseUrl: response.data.baseUrl,
           })
       }catch (e) {
           console.log(e);
       }
   }
}

const globalSaga = [
    initialBaseUrl,
]

export default globalSaga;
