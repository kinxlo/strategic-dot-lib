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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { ListItem, NavbarProperties } from '.'
import { NAV_LINKS } from './links'
import { TsaButton } from '../../atoms'

export const MobileNavbar: FC<NavbarProperties> = ({
  logoPath = '/images/logo-black.png',
  navLinks = NAV_LINKS,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="top">
        <NavigationMenu className="mx-auto flex flex-col gap-3 max-w-xl">
          {navLinks?.map((item, index) =>
            item?.dropdown ? (
              <DropdownMenu>
                <DropdownMenuTrigger className={`${navigationMenuTriggerStyle()}`}>
                  {item.route}
                  <ChevronDown size={`1rem`} />
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
                  <Link href={item.link}>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>{item.route}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            ),
          )}
          <div className="w-full flex items-center justify-center gap-x-2 md:gap-x-4">
            {children ? (
              children
            ) : (
              <TsaButton href="/signin" variant="primary" className="h-[47px] w-[97px] rounded-lg">
                Sign In
              </TsaButton>
            )}
          </div>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
