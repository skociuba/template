import {render} from '@testing-library/react';

import Test from './ResponseWithBody';

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
  it('render without crashing with testLoadingSelector', () => {
    const {container, getByTestId} = render(
      <Test
        fetchTestData={defaultProps.fetchTestData}
        testDataSelector={defaultProps.testDataSelector}
        testExampleSelector={defaultProps.testExampleSelector}
        testLoadingSelector={true}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('test-container')).toBeInTheDocument();
  });
  it('render without crashing with testExampleSelector', () => {
    const {container, getByTestId} = render(
      <Test
        fetchTestData={defaultProps.fetchTestData}
        testDataSelector={defaultProps.testDataSelector}
        testExampleSelector={null}
        testLoadingSelector={defaultProps.testLoadingSelector}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('test-container')).toBeInTheDocument();
  });
  it('render without crashing with testDataSelector', () => {
    const {container, getByTestId} = render(
      <Test
        fetchTestData={defaultProps.fetchTestData}
        testDataSelector={null}
        testExampleSelector={defaultProps.testExampleSelector}
        testLoadingSelector={defaultProps.testLoadingSelector}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('test-container')).toBeInTheDocument();
  });

  it('handle fetch fetchTestData', () => {
    const fetchTestData = jest.fn();
    render(
      <Test
        fetchTestData={fetchTestData}
        testDataSelector={defaultProps.testDataSelector}
        testExampleSelector={defaultProps.testExampleSelector}
        testLoadingSelector={null}
      />,
    );
    expect(fetchTestData).toHaveBeenCalledTimes(0);
    //expect(fetchTestData).toHaveBeenCalled();
  });
});
