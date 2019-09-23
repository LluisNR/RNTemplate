import { COLOR_ACTIONS } from '../actions/color-actions'

const initialState = {
    color: 'blue',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case COLOR_ACTIONS.CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }

        default:
            return state
    }
};
