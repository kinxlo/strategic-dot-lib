'use client'

import Link from 'next/link'
import { TsaButton, TsaInput } from '../../atoms'
import { Facebook, Instagram, Linkedin, Twitter, X } from 'lucide-react'
import { SelectSeparator } from '@/components'
import Logo from '../../atoms/logo'

export const TsaFooter = () => {
  return (
    <div className="bg-primary mt-20">
      <div className="mx-auto">
        <footer className="max-w-[1240px] mx-auto py-14 px-3 lg:px-0 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-10">
            <div>
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
            <div>
              <p className="text-base font-bold pb-2.5">Courses</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/frontend">
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/product-design">
                    Product Design
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/fullstack">
                    Fullstack Development
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/data-science">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/cyber-security">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300 text-xs" href="/course/instagram-marketing">
                    Advanced IG Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-base">
                <Link className="text-white hover:text-gray-300" href="/about-us">
                  About Us
                </Link>
              </h5>
              <h5 className="text-base font-semibold pt-2.5">
                <Link className="text-white hover:text-gray-300" href="/faq">
                  FAQs
                </Link>
              </h5>
              <h5 className="text-base font-semibold pt-2.5">
                <Link className="text-white hover:text-gray-300" href="#">
                  Privacy Policy
                </Link>
              </h5>
              <h5 className="text-base font-semibold pt-2.5">
                <Link className="text-white hover:text-gray-300" href="/contact">
                  Contact Us
                </Link>
              </h5>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
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
          </div>
          <SelectSeparator className="mt-[32px] mb-[30px]" />
          <div className="flex flex-col items-center lg:flex-row justify-between pt-4 gap-5">
            <p>&copy; {new Date().getFullYear()} TechStudio Academy</p>
            <ul className="flex items-center gap-[33px]">
              <p className="font-light">Terms and Policy</p>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/techstudioacdmy"
                  className="text-white hover:text-gray-300"
                >
                  <Twitter />
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
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com/company/tech-studio-academy"
                  className="text-white hover:text-gray-300"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
