import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TsaNavbar } from '.'

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
      route: 'Link 1',
      link: '/',
      hasdropDown: false,
    },
    {
      route: 'Link 2',
      link: '/',
      hasdropDown: false,
    },
    {
      route: 'Link 3',
      link: '/',
    },
    {
      route: 'Link 4',
      link: '/',
      hasdropDown: false,
    },
    {
      route: 'Link 5',
      link: '/',
      hasdropDown: true,
    },
  ],
}
