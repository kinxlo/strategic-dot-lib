import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaCarousel } from '.'
import { slideContent } from '../../../../constant'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaCarousel> = {
  title: 'Molecules/TsaCarousel',
  component: TsaCarousel,
}
export default meta

const Template: StoryFn<typeof TsaCarousel> = (args) => (
  <TsaCarousel showIndicator={false} slideContent={slideContent} />
)

export const Default = Template.bind({})
Default.args = {}
