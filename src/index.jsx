import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import wishListApp from './reducers'
import App from './components/App'

let store = createStore(wishListApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-mount-point')
);
