'use client'

import { FC, forwardRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components'
import Logo from '../../atoms/logo'
import { TsaButton } from '../../atoms'
import { MobileNavbar } from './mobile-nav'
import { Banner } from './banner'
import { ChevronDown } from 'lucide-react'
import { TsaNavbarProperties } from '@/types/index.types'
import { usePathname } from 'next/navigation' // Import usePathname hook

export const TsaNavbar: FC<TsaNavbarProperties> = ({
  logoPath = '',
  navLinks,
  children,
  bgScrollColor,
  linkClassName,
  className,
  showBanner = false,
  bannerDuration,
}) => {
  const [scrolling, setIsScrolling] = useState<boolean>(false)
  const pathname = usePathname()

  const handleScrollEvent = () => {
    setIsScrolling(window.scrollY > 1)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <section
      className={`${
        scrolling ? `shadow-md ${bgScrollColor}` : 'shadow-none'
      } sticky left-0 right-0 top-0 z-40 ${className}`}
    >
      {showBanner && <Banner duration={bannerDuration || `1m`} />}
      <nav>
        <div
          className={`relative mx-auto flex w-full max-w-[1240px] items-center gap-x-4 px-4 xl:px-0 transition-all duration-500 justify-between py-4 md:py-6`}
        >
          <Logo logo={logoPath} />
          <NavigationMenu className="hidden w-full items-center justify-center gap-x-4 lg:flex lg:gap-x-6">
            {navLinks?.map((item, index) =>
              item?.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'flex gap-1',
                      'bg-transparent hover:bg-transparent hover:text-mid-danger hover:underline focus:bg-transparent focus:text-white text-white',
                      linkClassName,
                      // Check if the pathname includes the dropdown link
                      item.dropdown?.some((link) => pathname?.includes(link.href)) ? 'text-mid-danger' : '',
                    )}
                  >
                    <p>{item.route}</p>
                    <div className="mt-1">
                      <ChevronDown size={`.8rem`} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {item?.dropdown?.map((link) => (
                        <ListItem key={link.title} title={link.title} href={link.href}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavigationMenuList key={index}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href={item.link}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent text-sm',
                        'hover:bg-transparent hover:text-mid-danger hover:underline',
                        linkClassName,
                        pathname === item.link ? 'text-mid-danger' : '',
                      )}
                    >
                      {item.route}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              ),
            )}
          </NavigationMenu>
          <div className="w-fit hidden items-center justify-end gap-x-2 justify-self-end lg:flex lg:gap-x-4">
            {children ? (
              children
            ) : (
              <TsaButton href="/signin" variant="primary" className="h-[47px] w-[97px] bg-mid-blue rounded-lg">
                Sign In
              </TsaButton>
            )}
          </div>
          <section className="lg:hidden">
            <MobileNavbar linkClassName={linkClassName} navLinks={navLinks} logoPath={''} />
          </section>
        </div>
      </nav>
    </section>
  )
}

export const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    const pathname = usePathname()
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
              className,
              href && pathname?.includes(href) ? 'text-mid-danger' : '',
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-primary">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
