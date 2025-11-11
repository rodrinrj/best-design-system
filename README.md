# Best Design System

_This is a demo project to apply to Fintual_

Best ever standarized design system library for Fintual, ment to work out-of-the-box with React and React Native projects.

## How to...

### Use

On your React or React Native project, run `pnpm install @fintual/design-system` to then import any component:

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

To-do

## To-do

1. [x] Setup project to start developing components
   1. [x] Configure pnpm, Typescript, Vite and other tooling
   2. [x] Configure Storybook
   3. [x] Configure Github Actions
   4. [ ] Make library cross-compatible with React and React Native
   5. [-] Write README
2. [ ] Implement library code
   1. [ ] Define Tokens and Variants
   2. [x] Text component
   3. [ ] Heading compoent
   4. [ ] Monospaced component

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
