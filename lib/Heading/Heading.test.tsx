import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Heading } from './Heading';

it('should render a heading element', () => {
  // arrange
  render(<Heading>Test me!</Heading>);

  // assert
  expect(screen.getByText('Test me!')).toBeInTheDocument();
});
