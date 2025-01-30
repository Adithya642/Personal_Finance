import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';

test('renders the Finance Tracker header', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  expect(screen.getByRole('heading', { name: /finance tracker/i })).toBeInTheDocument();
});
