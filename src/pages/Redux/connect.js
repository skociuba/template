import {connect} from 'react-redux';

import {fetchReduxData} from './actions';
import Redux from './Redux';

export const mapStateToProps = (state) => {
  return {
    cats: state?.test2?.test2?.users,
  };
};

const mapDispatchToProps = {
  a: console.log(fetchReduxData),
};
export default connect(mapStateToProps, mapDispatchToProps)(Redux);