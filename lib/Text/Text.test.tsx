import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Text } from './Text';

it('should render a text element', () => {
  // arrange
  render(<Text>Test me!</Text>);

  // assert
  expect(screen.getByText('Test me!')).toBeInTheDocument();
});
