import {fork} from 'redux-saga/effects'
import {getAllTagsFlow, addTagFlow, delTagFlow, editTagFlow} from './adminManagerTagsSaga.js'

export default function* rootSaga(){
	yield fork(getAllTagsFlow);
	yield fork(addTagFlow);
	yield fork(delTagFlow);
	yield fork(editTagFlow);
}