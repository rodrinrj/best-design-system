# Best Design System

_This is a demo project to apply to Fintual_

Best ever standarized design system library for Fintual, ment to work out-of-the-box with React and React Native projects.
The components in this library can be tried and tested in [Github Pages](https://rodrinrj.github.io/best-design-system/)

## How to...

### Use

On your React or React Native project, run `pnpm install @rodrinrj/design-system -` to then import any component:
_For simplicity in this demo, this library is only published to Github Packages and not npm, so this requires additional config_

Inside the App root:

```typescript
import { ThemeProvider, Themes } from '@rodrinrj/design-system';

export function App(props) {
  return (
    <ThemeProvider theme={Themes.LIGHT}>
      {props.children}
    </ThemeProvider>
  )
};
```

This provides to you the `useTheme()` hook to use inside your components, allowing you to access the current theme and switch it.

```typescript
import { Text, useTheme } from '@fintual/design-system';

function MyComponent(props) {
  const { theme, setTheme } = useTheme();

  return (
    <Text>
      This is some great cross-compatible text!
    </Text>
  );
}
```

### Contribute

Requirements: Node v25.1.0

1. Clone this repository
2. Run `nvm use` (if needed)
3. Run `pnpm install`
4. Create your component inside `lib/` with a native version if necessary, i.e., your component needs a native-specific primitive
5. Add appropirate testing and documentation to your component
6. When done, update the version with `pnpm changeset`
7. Commit your changes with an appropriate message and create a PR to be reviewed

### Publish

When publishing changes, i.e., merging a PR that aims at the main branch, a PR will be created to update the versions using changesets. When this secondary PR is merged, a new package should be automatically published to Github Packages. You should avoid manual publishing.

## To-do

- [x] Setup project to start developing components
  - [x] Configure pnpm, Typescript, Vite and other tooling
  - [x] Configure Storybook
  - [x] Configure Github Actions
  - [x] Write README
  - [x] Make library cross-compatible with React and React Native
  - [x] Add project examples on how to use the library
  - [ ] Add examples for React
  - [ ] Add examples for React Native
- [ ] Implement library code
  - [x] Define Tokens and Variants
  - [x] Text component
  - [x] Heading compoent
  - [ ] Monospaced component
  - [x] Add support for themes

## Things I would do in the future for a real library

- Improve library code
  - Add more components
  - Add more tests
  - Add styles (maybe tailwind) for more complex components
  - Add variants instead of one-by-one settings for easier use on complex combinations
- Improve CI/CD
  - Publish the library to the correct registry (npm, private, etc)
  - Push the coverage on build and enforce minimum percentage of testing
  - Add e2e tests for interactive components with Storybook
- Improve theming
  - Add variants for components that usually require them (e.g., buttons)
  - Extend the ThemeProvider to check the user system and act accordingly, e.g, save the theme in localStorage for web users
  - Allow extensible themes (brand themes, system specific, etc)
- Improve documentation
  - Add example pages on Storybook on how to mix elements
  - Fix Storybook's dark theme (for now, it only changes the component's styles)

## Scripts

_This is not a complete list_

- `dev`: Starts the local Storybook server, use this to develop and preview your components.
- `test`: Runs all your tests with vitest.
- `test:watch`: Runs tests in watch mode.
- `build:storybook`: Builds your Storybook as a static web application.
- `build:web`: Builds your component library for web.
- `build:native`: Builds your component library for mobile.
- `build`: Builds for all systems.
- `lint`: Runs ESLint.
- `format`: Formats your code with Prettier.
- `clean`: Removes dist folders.

## License

MIT
