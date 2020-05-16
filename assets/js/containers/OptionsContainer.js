import { connect } from 'react-redux'
import { selectOption } from '../actions'
import Options from '../components/Options'

const mapStateToProps = (state) => ({
    options: state.options
})

const mapDispatchToProps = (dispatch) => ({
    selectOption: (id) => dispatch(selectOption(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)