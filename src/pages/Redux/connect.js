import {connect} from 'react-redux';

import {fetchReduxData} from './actions';
import Redux from './Redux';

export const mapStateToProps = (state) => ({
  cats: state?.test2?.test2?.users,
});

const mapDispatchToProps = {
  fetchReduxData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Redux);
