# Best Design System

_This is a demo project to apply to Fintual_

Best ever standarized design system library for Fintual, ment to work out-of-the-box with React and React Native projects.
The components in this library can be tried and tested in [Github Pages](https://rodrinrj.github.io/best-design-system/)

## How to...

### Use

On your React or React Native project, run `pnpm install @rodrinrj/design-system -` to then import any component:

```typescript
import { Text } from '@fintual/design-system'

...
    <Text>This is some great cross-compatible text!</Text>
...
```

### Contribute

Requirements: Node v25.1.0

1. Clone this repository
2. Run `nvm use` (if needed)
3. Run `pnpm install`
4. Create your component inside `lib/`, with appropriate testing and Storybook documentation
5. When done, update the version with `pnpm changeset`
6. Commit your changes with an appropriate message and create a PR to be reviewed

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
- [ ] Implement library code
  - [x] Define Tokens and Variants
  - [x] Text component
  - [ ] Heading compoent
  - [ ] Monospaced component

## Scripts

- `dev`: Starts the local Storybook server, use this to develop and preview your components.
- `test`: Runs all your tests with vitest.
- `test:watch`: Runs tests in watch mode.
- `build`: Builds your Storybook as a static web application.
- `build:lib`: Builds your component library with Vite.
- `lint`: Runs ESLint.
- `format`: Formats your code with Prettier.

## License

MIT
