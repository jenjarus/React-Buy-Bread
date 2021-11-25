import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import throttle from 'lodash/throttle';
import reducer from './Redux/Reducer';
import {loadState, saveState} from './Redux/localStorage';

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        items: store.getState().items,
    });
}, 1000));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
