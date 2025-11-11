import React from 'react';
import TOKENS from '../tokens';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: keyof (typeof TOKENS)['colors'];
  size?: keyof (typeof TOKENS)['sizes'];
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const variants = {
      large: 1,
      medium: 2,
      small: 3,
    };

    const Tag = `h${variants[size]}` as keyof Pick<React.JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;
    return (
      <Tag
        ref={ref}
        style={{
          color: TOKENS.colors[color],
          fontFamily: TOKENS.typography.family,
        }}
        {...rest}
      />
    );
  },
);

Heading.displayName = 'Heading';
