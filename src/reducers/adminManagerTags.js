const initialState = []

export const actionTypes = {
	GET_ALL_TAGS: 'GET_ALL_TAGS',
	ADD_TAG: 'ADD_TAG',
	DEL_TAG: 'DEL_TAG',
	EDIT_TAG: 'EDIT_TAG',
	SET_TAGS: 'RESPONSE_GET_ALL_TAGS'
}

export const actions = {
	get_all_tags: function(){
		return {
			type: actionTypes.GET_ALL_TAGS
		}
	},
	del_tag: function(_id){
		return {
			type: actionTypes.DEL_TAG,
			_id
		}
	},
	add_tag: function(name){
		return{
			type: actionTypes.ADD_TAG,
			name
		}
	},
	edit_tag: function({_id, name}){
		return {
			type: actionTypes.EDIT_TAG,
			_id,
			name
		}
	}
}

export function reducer(state= initialState, action){
	switch (action.type){
		case actionTypes.SET_TAGS:
			return [...action.data]
		default:
			return state
	}
}