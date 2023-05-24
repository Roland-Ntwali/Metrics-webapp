import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('App function', () => {
  it('It has to has to render all the function ', () => {
    const home = render(
      <>
        <Provider store={store}>
          <Home />
        </Provider>
      </>,
    );
    expect(home).toMatchSnapshot();
  });
});
