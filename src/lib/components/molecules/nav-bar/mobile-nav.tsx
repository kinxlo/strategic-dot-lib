import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { FC } from 'react'
import { ListItem } from '.'
import { TsaButton } from '../../atoms'
import { TsaNavbarProperties } from '@/types/index.types'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

export const MobileNavbar: FC<TsaNavbarProperties> = ({ navLinks, children }) => {
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer" asChild>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent side="top" className="p-4">
        <NavigationMenu className="mx-auto flex flex-col gap-3 max-w-xl">
          {navLinks?.map((item, index) =>
            item?.dropdown ? (
              <NavigationMenuList key={index}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn('bg-transparent text-sm', router.pathname === item.link && 'text-primary')}
                  >
                    {item.route}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:grid-cols-2">
                      {item?.dropdown?.map((link) => (
                        <ListItem key={link.title} title={link.title} href={link.href}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            ) : (
              <NavigationMenuList key={index}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={item.link}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent text-sm',
                      router.pathname === item.link && 'text-primary',
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
