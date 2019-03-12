import { connect } from 'react-redux';
import APP from '../../compents/app'

const mapStateToProps = state=>{
    console.log(state.AppReducer)
  return state.AppReducer
};
const mapDispatchToProps = null;
export default connect(mapStateToProps)(APP)