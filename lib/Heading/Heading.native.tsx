import React from 'react';
import { StyleSheet, Text } from 'react-native';
import TOKENS from '../tokens';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: keyof (typeof TOKENS)['colors'];
  size?: keyof (typeof TOKENS)['sizes'];
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const styles = createStyles({ color, size, ...rest });
    const variants = {
      large: 1,
      medium: 2,
      small: 3,
    };

    const Tag = `h${variants[size]}` as keyof Pick<React.JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;
    return (
      <Text>
        <Tag
          ref={ref}
          style={styles.text}
          {...rest}
        />
      </Text>
    );
  },
);

Heading.displayName = 'Heading';

const createStyles = ({ color, size }: Pick<Required<HeadingProps>, 'color' | 'size'>) =>
  StyleSheet.create({
    text: {
      color: TOKENS.colors[color],
      fontSize: TOKENS.sizes[size],
    },
  });
