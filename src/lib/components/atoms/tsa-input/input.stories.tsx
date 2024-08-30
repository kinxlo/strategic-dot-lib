import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaInput } from '.'
import { TsaInputProperties } from '../../../../types/index.types'

const meta: Meta<typeof TsaInput> = {
  title: 'Atoms/tsa-input',
  component: TsaInput,

  argTypes: {
    onChange: { action: 'change' },
  },
}
export default meta

const Template: StoryFn<typeof TsaInput> = (args: TsaInputProperties) => <TsaInput {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'placeholder',
  type: 'text',
  label: 'Label',
}
