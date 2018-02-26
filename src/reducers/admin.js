import { combineReducers } from 'redux'
import { reducer as tags } from './adminManagerTags'

const initialState = {}

const admin = combineReducers({
	tags
})

export default admin