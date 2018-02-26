import {put, take, call, select} from 'redux-saga/effects'
import fetch from '../utils/request.js'
import {actionTypes as IndexActionTypes} from '../reducers/index.js'
import {actionTypes as ManagerTagsTypes } from '../reducers/adminManagerTags.js'
import { messageContro } from './messageSaga.js'

export function* getAllTags(){
	yield put({type:IndexActionTypes.FETCH_START})
	try {
		return yield call(fetch, {
			method: 'get',
			url: '/getAllTags'
		})
	}catch(err){
		yield messageContro(3, '网路请求出错')
		console.log('getAllTags 出错了')
	}finally{
		yield put({type: IndexActionTypes.FETCH_END})
	}
}

export function* addTag(name){
	yield put({type: IndexActionTypes.FETCH_START})
	try{
		return yield call(fetch,{
			method:'post',
			url: '/auth/addTag',
			data:{
				name
			}
		})
	}catch(err){
		yield messageContro(3, '网路请求出错')
	}finally{
		yield put({type: IndexActionTypes.FETCH_END})
	}
}

export function* delTag(_id){
	yield put({type: IndexActionTypes.FETCH_START})
	try{
		return yield call(fetch, {
			method:'get',
			url:'/auth/delTag',
			params:{
				_id
			}
		})
	}catch(err){
		yield messageContro(3, '网路请求出错')
	}finally{
		yield put({type: IndexActionTypes.FETCH_END})
	}
}

export function* editTag(_id, name){
	yield put({type: IndexActionTypes.FETCH_START})
	try{
		return yield call(fetch, {
			method: 'post',
			url : '/auth/editTag',
			data: {
				_id,
				name
			}
		})
	}catch(err){
		yield messageContro(3, '网路请求出错')
	}finally{
		yield put({type: IndexActionTypes.FETCH_END})
	}
}

export function* getAllTagsFlow(){
	while(true){
		yield take(ManagerTagsTypes.GET_ALL_TAGS)
		let res = yield call(getAllTags);
		if(res.errno===0){
			yield put({type: ManagerTagsTypes.SET_TAGS, data: res.result})
		}else{
			console.log('getAllTagsFlow 出错了')
		}
	}
}

export function* delTagFlow(){
	while(true){
		let req = yield take(ManagerTagsTypes.DEL_TAG)
		let res = yield call(delTag, req._id)
		if(res.errno === 0){
			yield messageContro(0, res.errmsg)
			yield put({type: ManagerTagsTypes.GET_ALL_TAGS})
		}else{
			yield messageContro(3, res.errmsg)
		}
	}
}


export function* addTagFlow(){
	while(true){
		let req = yield take(ManagerTagsTypes.ADD_TAG)
		let res = yield call(addTag, req.name)
		if(res.errno === 0){
			yield messageContro(0, res.errmsg)
			yield put({type: ManagerTagsTypes.GET_ALL_TAGS})
		}else{
			yield messageContro(3, res.errmsg)
			console.log('addTagFlow 出错了')
		}
	}
}

export function* editTagFlow(){
	while(true){
		let req = yield take(ManagerTagsTypes.EDIT_TAG)
		let res = yield call(editTag, req._id, req.name)
		if(res){
			if(res.errno ===0){
				yield messageContro(0, res.errmsg)
				yield put({type: ManagerTagsTypes.GET_ALL_TAGS})
			}else{
				yield messageContro(3, res.errmsg)
			}
		}else{
			yield messageContro(3, '服务器请求失败')
		}
	}
}