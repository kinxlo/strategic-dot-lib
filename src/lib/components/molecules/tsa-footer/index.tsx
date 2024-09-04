'use client'

import { FC } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TsaFooterProperties } from '@/types/index.types'
import Link from 'next/link'
import { TsaButton, TsaInput } from '../../atoms'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { SelectSeparator } from '@/components'
import Logo from '../../atoms/logo'

// Define footer variants
const footerVariants = cva('mx-auto py-14 px-3 lg:px-0 text-white', {
  variants: {
    layout: {
      default: 'flex flex-col lg:flex-row justify-between',
      grid: 'flex flex-col items-center text-center',
    },
    bgColor: {
      default: 'bg-primary',
      light: 'bg-light-grey',
      custom: '',
    },
  },
  defaultVariants: {
    layout: 'default',
    bgColor: 'default',
  },
})

export interface TsaFooterProps extends TsaFooterProperties, VariantProps<typeof footerVariants> {}

export const TsaFooter: FC<TsaFooterProps> = ({ footerBgColor, footerLayoutType, className, ...rest }) => {
  return (
    <div className={cn(footerVariants({ layout: footerLayoutType, bgColor: footerBgColor }), className)} {...rest}>
      <footer>
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-0">
          <div className="lg:col-span-2">
            <Logo logo={'/images/logo-white.png'} />
            <ul className="flex flex-col text-sm mt-5 gap-1">
              <li className="mb-2">
                <p className="text-light text-xs">
                  1, Ogunlesi Street, Awoyokun Bus Stop,
                  <br /> Onipanu Lagos
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <p className="text-base font-bold pb-2.5">Courses</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/course/frontend">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/course/backend">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/course/fullstack">
                  Fullstack Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h5 className="text-base">
              <Link className="text-white hover:text-gray-300" href="/about-us">
                About Us
              </Link>
            </h5>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/about-us">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 text-xs" href="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="max-w-[452px] lg:ml-auto">
              <h5 className="text-base pb-2.5">Subscribe to our newsletter</h5>
              <div className="flex items-center justify-between bg-white rounded-lg p-1">
                <span className="w-full">
                  <TsaInput
                    type="email"
                    className="py-2 text-xs border-none text-black"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="button-addon2"
                  />
                </span>
                <TsaButton size="lg" variant="primary" className="bg-mid-blue">
                  Subscribe
                </TsaButton>
              </div>
            </div>
          </div>
        </section>
        <SelectSeparator className="mt-[32px] mb-[30px]" />
        <section className="flex flex-col items-center lg:flex-row justify-between pt-4 gap-5">
          <p>&copy; {new Date().getFullYear()} TechStudio Academy</p>
          <ul className="flex items-center gap-[33px]">
            <p className="font-light">Terms and Policy</p>
            <li>
              <a target="_blank" href="https://twitter.com/techstudioacdmy" className="text-white hover:text-gray-300">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/company/techstudioacademy"
                className="text-white hover:text-gray-300"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://facebook.com/techstudioacademy"
                className="text-white hover:text-gray-300"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/techstudioacademy"
                className="text-white hover:text-gray-300"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  )
}
