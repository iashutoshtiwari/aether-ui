import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
  },
}

export const Outline: Story = {
  args: {
    children: 'Click Me',
    variant: 'outline',
  },
}
