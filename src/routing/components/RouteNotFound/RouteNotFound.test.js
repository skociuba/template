import renderWithRouter from 'utils/tests/renderWithRouter';
import {shared} from 'sharedConstants';

import RouteNotFound from './RouteNotFound';

const paths = {...shared.routes};

const defaultProps = {
  children: <div>Page</div>,
  path: paths.frontendControl.root,
  redirectTo: paths.frontendControl.root,
};

describe('<RouteNotFound/>', () => {
  it('render without crashing', () => {
    const {container} = renderWithRouter(<RouteNotFound {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
