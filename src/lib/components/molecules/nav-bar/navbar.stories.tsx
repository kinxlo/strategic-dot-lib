import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TsaNavbar } from '.'
import { NAV_LINKS } from './links'
import { TsaButton } from '../../atoms'

const meta: Meta<typeof TsaNavbar> = {
  title: 'Molecules/tsa-navbar',
  component: TsaNavbar,
}
export default meta

type TsaNavbarProps = React.ComponentPropsWithoutRef<typeof TsaNavbar>

const Template: StoryFn<TsaNavbarProps> = (args) => <TsaNavbar {...args} />

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
}
