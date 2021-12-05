import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {connect} from 'react-redux';

import {testDataSelector, testLoadingSelector} from './selectors';
import {fetchTestData} from './actions';
import 'react-loading-skeleton/dist/skeleton.css';
import {contentContainer} from './Example.style';
class Test extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTestData();
  }
  render() {
    const content = this.props.testLoading ? (
      <Skeleton count={100} />
    ) : (
      <section data-testid="test-container">
        {this.props.testData?.length > 0 &&
          this.props.testData?.map((user) => (
            <div key={user._id}>
              {user.name}--{user.trips}
              {user?.airline?.map((item) => (
                <p key={item.id}>
                  {item.name}--{item.head_quaters}
                </p>
              ))}
            </div>
          ))}
      </section>
    );
    return <div className={contentContainer}>{content}</div>;
  }
}

export const mapStateToProps = (state) => ({
  testData: testDataSelector(state),
  testLoading: testLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {fetchTestData: () => dispatch(fetchTestData())};
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
