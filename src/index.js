import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(rootReducer)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
