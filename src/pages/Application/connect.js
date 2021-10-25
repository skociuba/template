import {connect} from 'react-redux';

import {appCheckConfig} from './actions';
import Application from './Application';

export const mapStateToProps = (state) => {
  return {
    config: state.application.config,
  };
};

const mapDispatchToProps = {
  appCheckConfig,
};
export default connect(mapStateToProps, mapDispatchToProps)(Application);
