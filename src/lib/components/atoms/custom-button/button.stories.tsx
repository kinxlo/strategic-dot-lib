import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { ButtonProperties, CustomButton } from '.'

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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  variant: 'primary',
  onClick: () => alert('clicking primary'),
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
//   variant: 'SECONDARY',
// }

// export const Tertiary = Template.bind({})
// Tertiary.args = {
//   label: 'Button',
//   variant: 'TERTIARY',
// }

// export const Disabled = Template.bind({})
// Disabled.args = {
//   label: 'Button',
//   isDisabled: true,
// }
