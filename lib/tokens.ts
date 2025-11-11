export type Tokens = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
  typography: {
    family: string;
  };
};

export const baseTheme: Tokens = {
  colors: {
    primary: '#282828',
    secondary: '#757575',
    accent: '#005ad6',
  },
  sizes: {
    small: 14,
    medium: 16,
    large: 20,
  },
  typography: {
    family: 'Poppins, Helvetica, Arial, sans-serif',
  },
} as const;

export const darkTheme: Tokens = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#ffffff',
  },
} as const;
