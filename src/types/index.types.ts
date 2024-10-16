import { ChangeEventHandler, FocusEventHandler, HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export interface LogoProperties {
  logo: string
}

type Variant = 'default' | 'primary' | 'destructive' | 'subtle' | 'loading' | 'outline' | 'secondary' | 'ghost' | 'link'
type Size = 'default' | 'sm' | 'lg' | 'link' | 'icon' | 'circle'
export interface TsaButtonProperties {
  type?: 'submit' | 'button' | 'reset'
  variant?: Variant
  size?: Size
  icon?: ReactNode
  children?: ReactNode
  isLoading?: boolean
  isIconOnly?: boolean
  isLeftIconVisible?: boolean
  isRightIconVisible?: boolean
  isDisabled?: boolean
  ariaLabel?: string
  href?: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface TsaInputProperties {
  label?: string
  isRequired?: boolean
  state?: 'default' | 'primary' | 'error'
  name?: string
  placeholder: string
  type?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  isDisabled?: boolean
  className?: string
  helpText?: string
  validate?: (value: string) => boolean
}

export interface TsaNavbarProperties {
  navLinks: NavLink[]
  logoPath: string
  children?: ReactNode
  bgScrollColor?: string
  linkClassName?: string
  className?: string
  showBanner?: boolean
  bannerDuration?: string
}

export interface slideContentProperties {
  name: string
  image: string
  link: string
  _image?: ReactNode
}

type DropdownItem = {
  title: string
  href: string
  description: string
}

export interface NavLink {
  route: string
  link: string
  dropdown?: DropdownItem[]
}

export interface TsaMarqueeProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface TsaBannerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  testimonials: { message: string; image: string; name: string; job: string }[]
  topSlot?: ReactNode
  bottomSlot?: ReactNode
}

export interface TsaCarouselProperties {
  courseContent?: slideContentProperties[]
  galleryContent?: ReactNode[]
  facilityContent?: string[]
  bgColor?: string
  showIndicator?: boolean
  variant?: 'course' | 'gallery' | 'facility'
  stopZoom?: boolean
  itemsPerView?: number
  facilityCaroselFlatMaxWidth?: string
}

export interface TsaFooterProperties extends TsaNavbarProperties, HtmlHTMLAttributes<HTMLDivElement> {
  subscribeComponent: ReactNode
}
