import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaCarousel } from '.'
import { SLIDE_CONTENT } from '../../../../constant'
import Image from 'next/image'
import { TsaCarouselProperties } from '../../../../types/index.types'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaCarousel> = {
  title: 'Molecules/TsaCarousel',
  component: TsaCarousel,
}
export default meta

const Template: StoryFn<typeof TsaCarousel> = (args: TsaCarouselProperties) => (
  <TsaCarousel {...args} showIndicator={false} slideContent={SLIDE_CONTENT} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'gallery',
  galleryContent: [
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
  ],
}
