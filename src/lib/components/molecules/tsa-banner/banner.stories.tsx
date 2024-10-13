import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaBanner } from '.'
import { TsaBannerProps } from '../../../../types/index.types'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaBanner> = {
  title: 'Molecules/tsa-banner',
  component: TsaBanner,
}
export default meta

const Template: StoryFn<typeof TsaBanner> = (args: TsaBannerProps) => <TsaBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
