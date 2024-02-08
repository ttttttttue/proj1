import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('classNames', () => {
  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getAllByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn[0]);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
