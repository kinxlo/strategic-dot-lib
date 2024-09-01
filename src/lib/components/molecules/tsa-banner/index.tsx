'use client'

import * as React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage, Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components'
import { TESTIMONIAL_LIST } from '@/constant'
import { cn } from '@/lib/utils'
import { TsaBannerProps } from '@/types/index.types'

export const TsaBanner: React.FC<TsaBannerProps> = ({
  testimonials = TESTIMONIAL_LIST,
  topSlot = <Image width={112} height={112} src="/images/box-2.png" alt="box" />,
  bottomSlot = <Image width={91} height={88} src="/images/box-1.png" alt="box" />,
  className,
  ...rest
}) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (api) {
      api.on('select', () => setActiveIndex(api.selectedScrollSnap()))
    }
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <section
      className={cn(
        `bg-primary flex flex-col md:flex-row text-background justify-between max-w-full md:max-w-[1244px] p-4 md:p-[42px] min-h-[392px] rounded-lg mx-auto`,
        className,
      )}
      {...rest}
    >
      <div className="self-start mb-4 md:mb-0">{topSlot}</div>
      <div className="text-center flex-1">
        <h3 className="text-lg md:text-2xl font-semibold">What Our Graduate Say</h3>
        <Carousel className="w-full max-w-full md:max-w-[597px] mx-auto" setApi={setApi}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div>
                  <p className="leading-[24px] md:leading-[32px] my-[16px] md:my-[27px] tracking-[0.2px]">
                    {testimonial.message}
                  </p>
                  <div className="flex items-center justify-center gap-[12px] md:gap-[20px]">
                    <Avatar className="w-[72px] md:w-[96px] h-[72px] md:h-[96px] border-[2px] md:border-[3px] border-mid-grey-II">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold tracking-[0.5px] text-base md:text-xl text-accent mb-[4px] md:mb-[8px]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm tracking-[0.2px]">{testimonial.job}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Custom Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-[8px] md:h-[10px] rounded-full transition-all duration-300 cursor-pointer',
                activeIndex === index ? 'w-[20px] md:w-[30px] bg-white' : 'w-[8px] md:w-[10px] bg-gray-400',
              )}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="self-end mt-4 md:mt-0">{bottomSlot}</div>
    </section>
  )
}
