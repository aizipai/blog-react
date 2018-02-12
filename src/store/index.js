import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/index'


const win = window
const middlewares = []

let storeEnhancers;
if(process.env.NODE_ENV==='production'){
    storeEnhancers = compose(
        applyMiddleware(...middlewares)
    );
}else{
    storeEnhancers = compose(
        applyMiddleware(...middlewares),
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    );
}

export default createStore(rootReducer, {}, storeEnhancers)
	