import {call, put, take, select} from 'redux-saga/effects'
import axios from "axios";

const reducerName = "tagReducer";
const globalReducerName = 'globalReducer';

function* submitTagSaveForm() {
    while(true) {
        const action = yield take('SUBMIT_TAG_SAVE_FORM');
        const baseUrl = yield select(state => state[globalReducerName].baseUrl);
        try {
            const tagName = action.tagObject.tagName;
            const tagSaveDialogErrorArray = [];
            if(tagName.trim().length === 0 || tagName.indexOf(',') !== -1) {
                tagSaveDialogErrorArray.push("tagName");
            }
            if(tagSaveDialogErrorArray.length !== 0) {
                yield put({
                    type: 'TAG_SAVE_DIALOG_VALIDATE_ERROR',
                    tagSaveDialogErrorArray
                })
            }
            else {
                const requestConfig = {
                    withCredentials: true,
                    contentType: 'multiple/form-data',
                }
                const url = [baseUrl, "tag"].join("/");
                const response = yield call(axios.post,url,action.tagObject, requestConfig);
                if(response.data.statusCode === 200) {

                }
                else if(response.data.statusCode === 601){
                    yield put({
                        type: 'CHANGE_SNACKBAR_MESSAGE_ID',
                        infoLevel: 'error',
                        intlId: 'intl_duplicate_tag_name_error',
                    })
                }
                else {
                    yield put({
                        type: 'CHANGE_SNACKBAR_MESSAGE_ID',
                        infoLevel: 'error',
                        intlId: 'intl_save_error',
                    })
                }
            }
        } catch (e) {

        }

    }
}

const tagSaga = [
    submitTagSaveForm,
]

export default tagSaga;
