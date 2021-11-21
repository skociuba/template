import {connect} from 'react-redux';

import Test from './RequestWithBody';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector, testExampleSelector} from './selectors';
export const mapStateToProps = (state) => ({
  testData: testDataSelector(state),
  testExample: testExampleSelector(state),
  testLoading: testLoadingSelector(state),
});

export const mapDispatchToProps = {
  fetchTestData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
