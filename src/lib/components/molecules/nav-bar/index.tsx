'use client'

import { FC, forwardRef, ReactNode, useEffect, useState } from 'react'
import { NavLink } from './links'
import { ChevronDown } from 'lucide-react'
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

export interface NavbarProperties {
  navLinks: NavLink[]
  logoPath: string
  children?: ReactNode
}

export const TsaNavbar: FC<NavbarProperties> = ({ logoPath = '', navLinks, children }) => {
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
  }, [])

  return (
    <nav className={`${scrolling ? 'shadow-md' : 'shadow-none'} sticky left-0 right-0 top-0 z-40 bg-background`}>
      <div
        className={cn(
          `relative mx-auto flex w-full max-w-[1239px] items-center gap-x-4 px-4 transition-all duration-500 justify-between`,
          scrolling ? 'py-2' : 'py-4 md:py-6',
        )}
      >
        <Logo logo={logoPath} />
        <NavigationMenu className="hidden w-full items-center justify-center gap-x-4 lg:flex lg:gap-x-6">
          {navLinks?.map((item, index) =>
            item?.dropdown ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className={`${navigationMenuTriggerStyle()} flex gap-1`}>
                  <p>{item.route}</p>
                  <ChevronDown size={`.9rem`} />
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
                  <NavigationMenuLink href={item.link} className={navigationMenuTriggerStyle()}>
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
          <MobileNavbar navLinks={navLinks} logoPath={''} />
        </section>
      </div>
    </nav>
  )
}

export const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

// <NavigationMenuList key={index}>
//   <NavigationMenuItem>
//     <NavigationMenuTrigger>{item.route}</NavigationMenuTrigger>
//     <NavigationMenuContent>
//       <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//         {item?.dropdown?.map((link) => (
//           <ListItem key={link.title} title={link.title} href={link.href}>
//             {link.description}
//           </ListItem>
//         ))}
//       </ul>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// </NavigationMenuList>
