import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaMarquee } from '.'
import { TsaMarqueeProps } from '../../../../types/index.types'
import { IMG_PATH } from '../../../../constant'
import Image from 'next/image'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaMarquee> = {
  title: 'Molecules/tsa-marquee',
  component: TsaMarquee,
}
export default meta

const Template: StoryFn<typeof TsaMarquee> = (args: TsaMarqueeProps) => <TsaMarquee {...args} />

const logoList = IMG_PATH?.map((image, index) => {
  return <Image width={100} height={100} src={image} alt="logo" key={index} />
})

export const Default = Template.bind({})
Default.args = {
  children: logoList,
}
