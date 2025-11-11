import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The color of the button.
   */
  color?: 'primary' | 'secondary' | 'accent';

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ color = 'primary', size = 'medium', ...rest }, ref) => {
    const colors = {
      primary: '#282828',
      secondary: '#757575',
      accent: '#005ad6',
    } as const;

    const sizes = {
      small: '14px',
      medium: '16px',
      large: '20px',
    };

    return (
      <span
        ref={ref}
        style={{
          color: colors[color],
          fontSize: sizes[size],
        }}
        {...rest}
      ></span>
    );
  },
);

Text.displayName = 'Text';
