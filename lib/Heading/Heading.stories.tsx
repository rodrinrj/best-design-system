import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'accent'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <>
      <Heading
        {...args}
        size="large"
      >
        The brown fox jumps over the lazy dog
      </Heading>
      <br />
      <Heading
        {...args}
        size="medium"
      >
        The brown fox jumps over the lazy dog
      </Heading>
      <br />
      <Heading
        {...args}
        size="small"
      >
        The brown fox jumps over the lazy dog
      </Heading>
    </>
  ),
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Example: Story = {
  render: (args) => (
    <>
      <Heading size="large">Heading example</Heading>
      <Heading
        size="medium"
        color="accent"
      >
        This is a great example of hierarchy
      </Heading>
      <Heading
        size="small"
        color="secondary"
      >
        And a little more info
      </Heading>
      <br />
      <Heading {...args}>Modify the controls to see the text change</Heading>
    </>
  ),
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'The brown fox jumps over the lazy dog',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'The brown fox jumps over the lazy dog',
  },
};

export const Accent: Story = {
  args: {
    color: 'accent',
    children: 'The brown fox jumps over the lazy dog',
  },
};
