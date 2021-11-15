import Application from './Application';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps = {
  appCheckConfig: jest.fn(),
  config: {},
};

describe('<Application />', () => {
  it('render without crashing', () => {
    const testId = 'applicationContainer';
    const wrapper = enhancedRender(
      <Application
        data-testid={testId}
        appCheckConfig={defaultProps.appCheckConfig}
        config={defaultProps.config}
      />,
    );
    const {getByTestId, container} = wrapper;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId(testId)).toBeInTheDocument();
  });
});
