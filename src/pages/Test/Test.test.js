import {render} from '@testing-library/react';

import Test from './Test';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps = {
  fetchTestData: jest.fn(),
  testDataSelector: [],
  testExampleSelector: 'hello',
  testLoadingSelector: false,
};

describe('<Test/>', () => {
  it('render without crashing', () => {
    const {container, getByTestId} = render(
      <Test
        fetchTestData={defaultProps.fetchTestData}
        testDataSelector={defaultProps.testDataSelector}
        testExampleSelector={defaultProps.testExampleSelector}
        testLoadingSelector={defaultProps.testLoadingSelector}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('test-container')).toBeInTheDocument();
  });
});
