import type { Meta, StoryObj } from '@storybook/react';

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
      <br />
      <br />
      <Text {...args} />
    </>
  ),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

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
