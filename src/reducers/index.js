import { combineReducers } from 'redux'
// import { frontReducer as front } from './frontReducer'
// import { adminReducer as admin } from './adminReducer'

const initialState = {
	isFetching: true,
	msg:{
		type: 1,//0失败 1成功
		content: ''
	},
	userInfo: {}
}

//全局actionsType
export const actionsTypes={
	FETCH_START: 'FETCH_START',
	FETCH_END: 'FETCH_END',
}

//全局action creater
export const actions = {

}

export function globalReducer(state=initialState, action){
	switch (action.type){
		case actionsTypes['FETCH_START']:
			return {
				...state, isFetching:true
			};
		case actionsTypes['FETCH_END']:
			return {
				...state, isFetching: false
			}
		default: 
			return { ...state }
	}
}

export default combineReducers({
	globalState: globalReducer,
	// front,
	// admin
})