import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './Text';

const meta = {
  title: 'Design System/Text',
  component: Text,
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
      <Text
        {...args}
        size="large"
      >
        The brown fox jumps over the lazy dog
      </Text>
      <br />
      <Text
        {...args}
        size="medium"
      >
        The brown fox jumps over the lazy dog
      </Text>
      <br />
      <Text
        {...args}
        size="small"
      >
        The brown fox jumps over the lazy dog
      </Text>
    </>
  ),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Example: Story = {
  render: (args) => (
    <>
      <Text size="large">This text is for the most important part of the message</Text>
      <br />
      <Text size="medium">
        With a <Text color="accent">highlighted</Text> follow-up
      </Text>
      <br />
      <Text
        size="small"
        color="secondary"
      >
        And a little more info
      </Text>
      <br />
      <br />
      <br />
      <Text {...args}>Modify controls to see the text change</Text>
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
