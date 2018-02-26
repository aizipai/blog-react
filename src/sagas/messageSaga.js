import { put } from 'redux-saga/effects'
import { actionTypes as IndexActionTypes} from '../reducers/index'

export function* messageContro(msgType,msgContent){

	console.log(msgType, msgContent)
	yield put({ type: IndexActionTypes.SET_MESSAGE, msgType, msgContent})

	if(msgContent !== ''){
	  yield put({ type: IndexActionTypes.SET_MESSAGE, msgType: 0, msgContent: ''})
	}
}

