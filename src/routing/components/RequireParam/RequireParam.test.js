import renderWithRouter from 'utils/tests/renderWithRouter';
import {shared} from 'sharedConstants';

import RequireParam from './RequireParam';
const paths = {...shared.routes};

const defaultProps = {
  children: <div>Page</div>,
  isLocationStateRequired: false,
  redirectTo: paths.frontendPaginationSorting.root,
};

describe('<RequireParam/>', () => {
  it('render without crashing', () => {
    const {container} = renderWithRouter(<RequireParam {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
