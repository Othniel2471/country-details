import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import HomeContent from '../components/HomeContent';

const mockStore = configureStore([]);

describe('HomeContent', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [],
        loading: false,
        error: null,
      },
    });
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <HomeContent />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
