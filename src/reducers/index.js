import { combineReducers } from 'redux'
// import { frontReducer as front } from './frontReducer'
import  admin  from './admin'

const initialState = {
	isFetching: false,
	msg:{
		msgType: 0,//0:成功 1：警告 2：消息 3：错误
		msgContent: ''
	},
	userInfo: {},
	
}

//全局actionsType
export const actionTypes={
	FETCH_START: 'FETCH_START',
	FETCH_END: 'FETCH_END',
	SET_MESSAGE: 'SET_MESSAGE',
}

//全局action creater
export const actions = {
	clear_msg:function(){
		return {
			type: actionTypes.SET_MESSAGE,
			msgType: 0,
			msgContent: ''
		}
	}
}

export function globalReducer(state=initialState, action){
	switch (action.type){
		case actionTypes['FETCH_START']:
			return {
				...state, isFetching:true
			}
		case actionTypes['FETCH_END']:
			return {
				...state, isFetching: false
			}
		case actionTypes['SET_MESSAGE']:
			return {
				...state, 
				isFetching: false,
				msg:{
					msgType: action.msgType,
					msgContent: action.msgContent
				}
			}
		default: 
			return { ...state }
	}
}

export default combineReducers({
	globalState: globalReducer,
	// front,
	admin
})