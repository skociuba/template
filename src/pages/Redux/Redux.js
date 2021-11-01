import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Hooks from './Hooks';
import {fetchReduxData} from './Actions';
class Redux extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleFetchData = this.handleFetchData.bind(this);
  }
  handleFetchData() {
    this.props.fetchReduxData();
  }
  render() {
    // console.log(fetchReduxData());
    // console.log(this.props.users);
    // const postTitles = this?.props?.users?.map((title) => (
    //   <div key={title.id}>
    //     <p>
    //       <img src={title.url} alt="cats" width="700" height="600" />
    //     </p>
    //   </div>
    // ));

    return (
      <Fragment>
        <h2>REDUX METHOD</h2>
        <button onClick={this.handleFetchData}>fetch</button>

        <Hooks />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state?.users?.users,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchReduxData: () => dispatch(fetchReduxData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Redux);
