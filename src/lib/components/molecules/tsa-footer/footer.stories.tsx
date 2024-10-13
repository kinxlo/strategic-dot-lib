import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TsaFooter } from '.'
import { TsaFooterProperties } from '../../../../types/index.types'

const meta: Meta<typeof TsaFooter> = {
  title: 'Molecules/TsaFooter',
  component: TsaFooter,
}
export default meta

const Template: StoryFn<TsaFooterProperties> = (args) => <TsaFooter {...args} />

export const Default = Template.bind({})
Default.args = {}
