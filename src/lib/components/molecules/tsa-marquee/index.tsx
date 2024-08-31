import { cn } from '@/lib/utils'
import { TsaMarqueeProps } from '@/types/index.types'
import { FC } from 'react'
import Marquee from 'react-fast-marquee'

export const TsaMarquee: FC<TsaMarqueeProps> = ({ children, className, ...rest }) => {
  return (
    <Marquee speed={50}>
      <div className={cn(`flex items-center mr-10 gap-10 p-5`, className)} {...rest}>
        {children}
      </div>
    </Marquee>
  )
}
