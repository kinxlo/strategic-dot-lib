import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { SLIDE_CONTENT } from '../../../../constant'
import Image from 'next/image'
import { TsaFooter } from '.'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaFooter> = {
  title: 'Molecules/TsaFooter',
  component: TsaFooter,
}
export default meta

const Template: StoryFn<typeof TsaFooter> = (args) => <TsaFooter />

export const Default = Template.bind({})
Default.args = {}
