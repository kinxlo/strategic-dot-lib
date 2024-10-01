'use client'

import { FC } from 'react'
import { cn } from '@/lib/utils'
import { TsaFooterProperties } from '@/types/index.types'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SelectSeparator } from '@/components'
import Logo from '../../atoms/logo'
import { Input, TsaButton } from '../../atoms'

export const TsaFooter: FC<TsaFooterProperties> = ({ className, navLinks, subscribeComponent, ...rest }) => {
  return (
    <div className={cn(`bg-primary py-[64px] text-white px-[1rem] lg:px-0`, className)} {...rest}>
      <footer className="max-w-[1240px] mx-auto">
        <section className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <div className="flex flex-col">
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
          <div className="flex flex-col lg:w-1/6">
            <p className="text-base font-bold pb-2.5">Courses</p>
            <ul className="flex flex-col gap-3">
              {navLinks?.map((item, index) => {
                if (item.dropdown) {
                  return item.dropdown.map((course, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-white hover:text-mid-danger text-xs" href={course.href}>
                          {course.title}
                        </Link>
                      </li>
                    )
                  })
                }
                return null
              })}
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/6">
            <h5 className="text-base">About Us</h5>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <Link className="text-white hover:text-mid-danger text-xs" href="/about">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-mid-danger text-xs" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-mid-danger text-xs" href="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/3">
            <div>
              <h5 className="text-base pb-2.5 text-white">Subscribe to our newsletter</h5>
              {subscribeComponent || (
                <div className="flex items-center justify-between bg-white rounded-lg p-1">
                  <span className="w-full">
                    <Input
                      disabled
                      type="email"
                      className="py-2 text-xs border-none text-black"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      aria-describedby="button-addon2"
                    />
                  </span>
                  <TsaButton isDisabled={true} size="lg" variant="primary" className="bg-mid-blue">
                    Subscribe
                  </TsaButton>
                </div>
              )}
            </div>
          </div>
        </section>
        <SelectSeparator className="mt-[32px] mb-[30px]" />
        <section className="flex flex-col items-center lg:flex-row justify-between pt-4 gap-5">
          <p>&copy; {new Date().getFullYear()} TechStudio Academy</p>
          <ul className="flex items-center gap-[33px]">
            <p className="font-light">Terms and Policy</p>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/techstudioacdmy"
                className="text-white hover:text-mid-danger"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/company/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://facebook.com/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  )
}
