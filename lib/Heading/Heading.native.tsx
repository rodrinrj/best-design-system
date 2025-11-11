import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { type Tokens } from '../tokens';
import { useTheme } from '../theme';
import type { AllowedVariant, HeadingProps } from './Heading';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const { theme } = useTheme();
    const styles = createStyles(theme, color, size);
    const variants = {
      large: 1,
      medium: 2,
      small: 3,
    };

    const Tag = `h${variants[size]}` as AllowedVariant;
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

const createStyles = (theme: Tokens, color: keyof Tokens['colors'], size: keyof Tokens['sizes']) =>
  StyleSheet.create({
    text: {
      color: theme.colors[color],
      fontSize: theme.sizes[size],
    },
  });
