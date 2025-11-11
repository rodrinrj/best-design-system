import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import TOKENS from '../tokens';

export interface TextProps extends RNTextProps {
  color?: keyof (typeof TOKENS)['colors'];
  size?: keyof (typeof TOKENS)['sizes'];
}

const Text = React.forwardRef<RNText, TextProps>(
  ({ color = 'primary', size = 'medium', children, ...rest }, ref) => (
    <RNText
      ref={ref}
      style={{
        color: TOKENS.colors[color],
        fontSize: TOKENS.sizes[size],
        fontFamily: TOKENS.typography.family,
      }}
      {...rest}
    >
      {children}
    </RNText>
  ),
);

Text.displayName = 'Text';
export default Text;
