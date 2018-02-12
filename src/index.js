import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/common.css';
import App from './containers/index.js';
import registerServiceWorker from './registerServiceWorker';

//element默认主题样式
import 'element-theme-default'
import { Provider } from 'react-redux'

//store
import store from './store/index'

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
