'use client'

import { FC, useEffect, useState } from 'react'

import { NAV_LINKS } from './links'
import Logo from '../../atoms/logo'
import { cn } from '../../../utils'
import { TsaButton } from '../../atoms'
import Link from 'next/link'

interface NavbarProperties {
  logoPath?: string
  navLinks?: []
}

export const TsaNavbar: FC<NavbarProperties> = ({ logoPath = '/images/logo-black.png', navLinks = NAV_LINKS }) => {
  const [scrolling, setIsScrolling] = useState<boolean>(false)

  const handleScrollEvent = () => {
    if (window.scrollY > 1) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  })

  return (
    <nav className={`${scrolling ? 'shadow-md' : 'shadow-none'} sticky left-0 right-0 top-0 z-40 bg-background`}>
      <div
        className={cn(
          `relative mx-auto flex w-full max-w-[1239px] items-center gap-x-4 px-4 transition-all duration-500 md:justify-between`,
          scrolling ? 'py-2' : 'py-4 md:py-6',
        )}
      >
        <section className="md:hidden">{/* <MobileNavbar /> */}</section>
        <Logo logo={logoPath} />
        <div className="hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-6">
          {navLinks?.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={`p-3 text-[14px] font-medium text-neutral-dark-1 transition-all duration-300 hover:text-primary`}
              >
                {item.route}
              </Link>
            )
          })}
        </div>
        <div className="w-fullx hidden items-center justify-end gap-x-4 justify-self-end md:flex lg:gap-x-8">
          {/* <Link href={`/register`}> */}
          <TsaButton variant="primary" className="h-[47px] w-[97px] rounded-lg">
            Sign In
          </TsaButton>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  )
}
