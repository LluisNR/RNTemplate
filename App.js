import React from 'react'
import PropTypes from 'prop-types'

import NavigationContainer from './navigation/screens'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/root-reducer'
import createSagaMiddleware from 'redux-saga'
import {watchChangeColor} from './redux/sagas/color-sagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  return store
}

const store = configureStore()

sagaMiddleware.run(watchChangeColor);

const AppContainer = () => (
    <Provider store={store}>
        <NavigationContainer />
    </Provider>
)

export default AppContainer;
