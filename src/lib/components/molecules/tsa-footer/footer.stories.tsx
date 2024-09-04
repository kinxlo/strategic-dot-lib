import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaFooter } from '.'
import { TsaFooterProperties } from '../../../../types/index.types'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaFooter> = {
  title: 'Molecules/TsaFooter',
  component: TsaFooter,
}
export default meta

const Template: StoryFn<typeof TsaFooter> = (args: TsaFooterProperties) => <TsaFooter {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'max-w-[1240px]',
  footerBgColor: 'bg-primary',
}
