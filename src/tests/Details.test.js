import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      country: 'Ghana',
      cases: '16',
      continent: 'Africa',
      todayCases: '123',
      todayDeaths: '44',
      recovered: '23',
      todayRecovered: '34',
      active: '123',
      critical: '20',
      population: '102',

    },
  }),
}));

test('Check if details page renders correctly', () => {
  const tree = render(
    <Router>
      <Details />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
