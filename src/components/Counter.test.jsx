import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('renders the Counter component', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('increments the count when clicked', async () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});
