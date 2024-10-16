import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { TsaCarousel } from '.'
import { SLIDE_CONTENT } from '../../../../constant'
import Image from 'next/image'
import { TsaCarouselProperties } from '../../../../types/index.types'

const meta: Meta<typeof TsaCarousel> = {
  title: 'Molecules/TsaCarousel',
  component: TsaCarousel,
}
export default meta

const Template: StoryFn<typeof TsaCarousel> = (args: TsaCarouselProperties) => (
  <TsaCarousel {...args} showIndicator={false} courseContent={SLIDE_CONTENT} />
)

export const CourseCarousel = Template.bind({})
CourseCarousel.args = {
  variant: `course`,
}

export const GalleryCarousel = Template.bind({})
GalleryCarousel.args = {
  variant: `gallery`,
  galleryContent: [
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
    <Image className="w-full h-full object-cover" width={500} height={500} src={'/images/img.png'} alt={'img'} />,
  ],
}

export const FacilityCarousel = Template.bind({})
FacilityCarousel.args = {
  variant: `facility`,
  facilityContent: [
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
    '/images/img.png',
  ],
}
