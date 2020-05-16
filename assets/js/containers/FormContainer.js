import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
    distance: state.distance,
    options: state.options,
    connection: state.connection
});

export default connect(mapStateToProps)(Form)