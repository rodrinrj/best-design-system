import React from 'react';
import { useTheme } from '../theme';
import type { Tokens } from '../tokens';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: keyof Tokens['colors'];
  size?: keyof Tokens['sizes'];
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const { theme } = useTheme();

    return (
      <span
        ref={ref}
        style={{
          color: theme.colors[color],
          fontSize: theme.sizes[size],
          fontFamily: theme.typography.family,
        }}
        {...rest}
      />
    );
  },
);

Text.displayName = 'Text';
