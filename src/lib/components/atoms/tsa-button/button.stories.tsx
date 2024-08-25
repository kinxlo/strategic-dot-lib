import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ButtonProperties, TsaButton } from '.'
import { Orbit } from 'lucide-react'

const meta: Meta<typeof TsaButton> = {
  title: 'Atoms/tsa-button',
  component: TsaButton,

  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}
export default meta

const Template: StoryFn<typeof TsaButton> = (args: ButtonProperties) => <TsaButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Subscribe',
  variant: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Subscribe',
  variant: 'secondary',
}
export const destructive = Template.bind({})
destructive.args = {
  children: 'Subscribe',
  variant: 'destructive',
}

export const outline = Template.bind({})
outline.args = {
  children: 'Subscribe',
  variant: 'outline',
}
export const loading = Template.bind({})
loading.args = {
  children: 'Subscribe',
  variant: 'primary',
  isLoading: true,
}
export const disabled = Template.bind({})
disabled.args = {
  children: 'Subscribe',
  variant: 'primary',
  isDisabled: true,
}
export const withLeftIcon = Template.bind({})
withLeftIcon.args = {
  children: 'Subscribe',
  variant: 'primary',
  isLeftIconVisible: true,
  icon: <Orbit />,
}
export const withRightIcon = Template.bind({})
withRightIcon.args = {
  children: 'Subscribe',
  variant: 'primary',
  isRightIconVisible: true,
  icon: <Orbit />,
}
export const iconOnly = Template.bind({})
iconOnly.args = {
  children: 'Subscribe',
  variant: 'primary',
  isIconOnly: true,
  icon: <Orbit />,
  size: 'sm',
}
