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
import { Menu } from 'lucide-react'
import { FC } from 'react'
import { ListItem } from '.'
import { TsaButton } from '../../atoms'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { TsaNavbarProperties } from '@/types/index.types'

export const MobileNavbar: FC<TsaNavbarProperties> = ({ navLinks, linkClassName, children }) => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer bg-white rounded-sm" asChild>
        <Menu className="text-black" />
      </SheetTrigger>
      <SheetContent side="top" className="p-10">
        <NavigationMenu className="mx-auto flex flex-col gap-3 max-w-xl">
          {navLinks?.map((item, index) =>
            item?.dropdown ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'flex gap-1',
                    'bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-mid-danger',
                    'text-black focus:text-black active:text-black',
                    linkClassName,
                  )}
                >
                  <p className="text-black hover:text-mid-danger">{item.route}</p>
                  <div className="ml-1">
                    <ChevronDown className="text-black" size={`.8rem`} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                      'bg-transparent hover:bg-transparent hover:text-mid-danger hover:underline focus:bg-transparent text-sm',
                    )}
                  >
                    {item.route}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            ),
          )}
          <div className="w-full flex items-center justify-center gap-x-2 md:gap-x-4">
            {children ? (
              children
            ) : (
              <TsaButton href="/signin" variant="primary" className="h-[47px] w-[97px] bg-mid-blue rounded-lg">
                Sign In
              </TsaButton>
            )}
          </div>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
