import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Heading from '../components/Header';

// Mock FontAwesomeIcon component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />,
}));

describe('Heading', () => {
  it('renders the Heading component correctly', () => {
    const { getByText } = render(<Heading />);
    expect(getByText('COVID-19 Updates')).toBeInTheDocument();
  });
});
