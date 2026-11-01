import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sidebar identity and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Tomasz Zbroszczyk' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: 'Primary' });
  ['Home', 'Experience', 'Projects & Research', '/uses'].forEach((label) => {
    expect(nav).toHaveTextContent(label);
  });
});
