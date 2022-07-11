import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import UserInput from './UserInput.js'
import todoApp from './reducers'

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Container extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <UserInput />
            </Provider>
        );
    }
}

export default Container;