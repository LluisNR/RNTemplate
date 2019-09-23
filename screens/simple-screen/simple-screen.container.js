import { connect } from 'react-redux'
import SimpleScreenComponent from './simple-screen.component'
import { changeColor } from '../../redux/actions/user-actions'
import { handlerChangeColor } from './simple-screen.handler'

const generatorChangeColor = handlerChangeColor();

const SimpleScreenContainer = connect(
  state => ({
    color: state.color.color
  }),
  dispatch => ({
    changeColor: () => dispatch(changeColor(generatorChangeColor().next().value))
  })
)(SimpleScreenComponent)

export default SimpleScreenContainer
