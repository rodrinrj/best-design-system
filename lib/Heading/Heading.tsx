import React from 'react';
import type { Tokens } from '../tokens';
import { useTheme } from '../theme';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: keyof Tokens['colors'];
  size?: keyof Tokens['sizes'];
}

export type AllowedVariant = keyof Pick<React.JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const { theme } = useTheme();
    const variants = {
      large: 1,
      medium: 2,
      small: 3,
    };

    const Tag = `h${variants[size]}` as AllowedVariant;
    return (
      <Tag
        ref={ref}
        style={{
          color: theme.colors[color],
          fontFamily: theme.typography.family,
        }}
        {...rest}
      />
    );
  },
);

Heading.displayName = 'Heading';
