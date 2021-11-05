import {connect} from 'react-redux';

import {appCheckConfig} from './actions';
import Application from './Application';
import {paramsSelector} from './selectors';
export const mapStateToProps = (state) => {
  return {
    config: paramsSelector(state),
  };
};

export const mapDispatchToProps = {
  appCheckConfig,
};
export default connect(mapStateToProps, mapDispatchToProps)(Application);
