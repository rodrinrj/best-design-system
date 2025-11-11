import React from 'react';
import TOKENS from '../tokens';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: keyof (typeof TOKENS)['colors'];
  size?: keyof (typeof TOKENS)['sizes'];
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => (
    <span
      ref={ref}
      style={{
        color: TOKENS.colors[color],
        fontSize: TOKENS.sizes[size],
        fontFamily: TOKENS.typography.family,
      }}
      {...rest}
    />
  ),
);

Text.displayName = 'Text';
