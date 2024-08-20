import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { ButtonProperties, CustomButton } from '.'
import { Orbit } from 'lucide-react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CustomButton> = {
  title: 'Atoms/custom-Button',
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CustomButton> = (args: ButtonProperties) => <CustomButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  variant: 'primary',
  onClick: () => alert('clicking primary'),
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
}
export const destructive = Template.bind({})
destructive.args = {
  children: 'Button',
  variant: 'destructive',
}
export const subtle = Template.bind({})
subtle.args = {
  children: 'Button',
  variant: 'subtle',
}
export const outline = Template.bind({})
outline.args = {
  children: 'Button',
  variant: 'outline',
}
export const loading = Template.bind({})
loading.args = {
  children: 'Button',
  variant: 'primary',
  isLoading: true,
}
export const withLeftIcon = Template.bind({})
withLeftIcon.args = {
  children: 'Button',
  variant: 'primary',
  isLeftIconVisible: true,
  icon: <Orbit />,
}
export const withRightIcon = Template.bind({})
withRightIcon.args = {
  children: 'Button',
  variant: 'primary',
  isRightIconVisible: true,
  icon: <Orbit />,
}
export const iconOnly = Template.bind({})
iconOnly.args = {
  children: 'Button',
  variant: 'primary',
  isIconOnly: true,
  icon: <Orbit />,
  size: 'sm',
}
