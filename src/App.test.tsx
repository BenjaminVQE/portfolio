import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/BV/i);
  expect(logoElement).toBeInTheDocument();
});
