import { combineReducers } from 'redux'
import UserReducer from './user-reducer'
import TriviaReducer from './trivia-reducer'
import ColorReducer from './color-reducer'

const ReducerFactory = combineReducers({
    user: UserReducer,
    trivia: TriviaReducer,
    color: ColorReducer
})

export default ReducerFactory
