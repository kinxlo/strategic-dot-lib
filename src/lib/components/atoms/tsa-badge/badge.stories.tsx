import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { Badge, BadgeProps } from '../../../../components'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/tsa-badge',
  component: Badge,
}
export default meta

const Template: StoryFn<typeof Badge> = (args: BadgeProps) => <Badge {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Badge',
}
