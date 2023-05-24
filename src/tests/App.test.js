import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('App function has to match the snapshot ', () => {
  it('It has to has to render all the function ', () => {
    const home = render(
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>,
    );
    expect(home).toMatchSnapshot();
  });
});
