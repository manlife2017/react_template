import { connect } from 'react-redux';
import Login from '../../compents/login'

const mapStateToProps = state=>{
  return state.LoginReducer
};
const mapDispatchToProps = null;
export default connect(mapStateToProps)(Login)