export const COLOR_ACTIONS = {
    CHANGE_COLOR: 'UserAction.CHANGE_COLOR',
}

export const changeColor = (_color) => {
    console.log('changing color');
    return {
        type: COLOR_ACTIONS.CHANGE_COLOR,
        color: _color
    }
}
