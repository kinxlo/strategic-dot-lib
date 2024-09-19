'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Thumb } from './embla-thumbs'
import { FC, useRef, useState, useEffect, useCallback, ReactNode } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components'
import { TsaCarouselProperties } from '@/types/index.types'
import { TsaButton } from '../../atoms'
import Autoplay from 'embla-carousel-autoplay'

export const TsaCarousel: FC<TsaCarouselProperties> = ({
  slideContent,
  galleryContent,
  showIndicator = false,
  bgColor = 'primary',
  variant = 'course',
}) => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const thumbsContainerRef = useRef<HTMLDivElement>(null)

  const handleThumbClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index)
        setActiveIndex(index)
      }
    },
    [api],
  )

  // useEffect(() => {
  //   if (!api) return

  //   const handleSelect = () => {
  //     setActiveIndex(api.selectedScrollSnap())
  //   }

  //   api.on('select', handleSelect)
  //   return () => {
  //     api.off('select', handleSelect)
  //   }
  // }, [api])

  useEffect(() => {
    const activeThumb = thumbsContainerRef.current?.children[activeIndex] as HTMLElement
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeIndex])

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  if (variant === 'facility') {
    return (
      <Carousel className="w-full max-w-[1240px] mx-auto">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }

  if (variant === 'gallery') {
    return (
      <div>
        <Carousel plugins={[plugin.current]} className="max-w-[892px] mx-auto relative">
          <CarouselContent>
            {galleryContent.map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="rounded-[30px] overflow-hidden">
                    <CardContent className="max-w-[892px] lg:h-[664px] p-0">{_}</CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Image
            className="hidden lg:block absolute top-[10rem] left-[12rem] z-10 scale-[200%]"
            width={525}
            height={100}
            src="/images/Polygon.png"
            alt="line"
          />
        </Carousel>
      </div>
    )
  }

  return (
    <Carousel className="w-full max-w-[655px] mx-auto" setApi={setApi}>
      <CarouselContent className="h-[270px]">
        {slideContent?.map((content, index) => (
          <CarouselItem className="h-full" key={index}>
            <div className="p-1 h-full">
              <Card className="h-full relative rounded-none rounded-t-[1rem] overflow-hidden">
                <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                  <p className="text-4xl  text-center text-white font-[700]">{content.name}</p>
                  <TsaButton href={content.link} className="bg-background w-[160px] text-mid-blue border-mid-blue ">
                    View Course
                  </TsaButton>
                </div>
                <Image width={200} height={200} src={content.image} alt="logo" className="w-full h-full object-cover" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showIndicator && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}

      <section
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className={`overflow-auto border rounded-b-[1rem] mx-[4px] p-[10px] bg-${bgColor}`}
        ref={thumbsContainerRef}
      >
        <div className="flex w-fit justify-between gap-[10px]">
          {slideContent?.map((content, index) => (
            <Thumb
              key={index}
              index={content.image}
              title={content.name}
              selected={index === activeIndex}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>
      </section>
    </Carousel>
  )
}
