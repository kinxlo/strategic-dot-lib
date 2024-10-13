import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TsaNavbar } from '.'
import { TsaButton } from '../../atoms'
import { NAV_LINKS } from '../../../../constant'
import { TsaNavbarProperties } from '../../../../types/index.types'

const meta: Meta<typeof TsaNavbar> = {
  title: 'Molecules/tsa-navbar',
  component: TsaNavbar,
}
export default meta

const Template: StoryFn<typeof TsaNavbar> = (args: TsaNavbarProperties) => <TsaNavbar {...args} />

export const Default = Template.bind({})
Default.args = {
  navLinks: [
    {
      route: 'LINK 1',
      link: '/',
    },
    {
      route: 'LINK 2',
      link: '/',
    },
    {
      route: 'LINK 3',
      link: '/',
    },
    {
      route: 'LINK 4',
      link: '/',
    },
    {
      route: 'LINK 5',
      link: '/',
    },
  ],
  children: (
    <>
      <TsaButton href="/signin" variant="primary" className="h-[47px] w-[97px] rounded-lg">
        CTA 1
      </TsaButton>
      <TsaButton href="/signup" variant="outline" className="h-[47px] w-[97px] rounded-lg">
        CTA 2
      </TsaButton>
    </>
  ),
}

export const CustomCTA = Template.bind({})
CustomCTA.args = {
  navLinks: NAV_LINKS,
  logoPath: '/images/logo-black.png',
  className: 'bg-accent',
  linkClassName: 'text-black',
}

export const CustomCTA_2 = Template.bind({})
CustomCTA_2.args = {
  navLinks: NAV_LINKS,
  logoPath: '/images/logo-white.png',
  className: 'bg-primary',
  linkClassName: 'text-white',
}

export const CustomCTA_2_with_banner = Template.bind({})
CustomCTA_2_with_banner.args = {
  navLinks: NAV_LINKS,
  logoPath: '/images/logo-white.png',
  className: 'bg-primary',
  linkClassName: 'text-white',
  showBanner: true,
}
