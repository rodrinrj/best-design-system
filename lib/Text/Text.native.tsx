import React from 'react';
import { Text as RNText, StyleSheet, type TextProps as RNTextProps } from 'react-native';
import { type Tokens } from '../tokens';
import { useTheme } from '../theme';

export interface TextProps extends RNTextProps {
  color?: keyof Tokens['colors'];
  size?: keyof Tokens['sizes'];
}

export const Text = React.forwardRef<RNText, TextProps>(
  ({ color = 'primary', size = 'medium', children, ...rest }, ref) => {
    const { theme } = useTheme();
    const styles = createStyles(theme, color, size);

    return (
      <RNText
        ref={ref}
        style={styles.text}
        {...rest}
      >
        {children}
      </RNText>
    );
  },
);

Text.displayName = 'Text';

const createStyles = (theme: Tokens, color: keyof Tokens['colors'], size: keyof Tokens['sizes']) =>
  StyleSheet.create({
    text: {
      color: theme.colors[color],
      fontSize: theme.sizes[size],
      fontFamily: theme.typography.family,
    },
  });
