import { put, takeEvery, all } from 'redux-saga/effects'
import { COLOR_ACTIONS } from '../actions/color-actions'    
export function* handlerChangeColor() {
    while (true) {
        yield 'red';
        yield 'yellow';
        yield 'green';
        yield 'black';
        yield 'blue';
    }
}

export function* watchChangeColor() {
    yield takeEvery(COLOR_ACTIONS.CHANGE_COLOR, handlerChangeColor)
}