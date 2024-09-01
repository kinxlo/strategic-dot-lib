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
import { FC, useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Card } from '@/components'
import { slideContentProperties } from '@/types/index.types'
import { TsaButton } from '../../atoms'

interface TsaCarouselProperties {
  slideContent: slideContentProperties[]
  bgColor?: string
  showIndicator?: boolean
}

export const TsaCarousel: FC<TsaCarouselProperties> = ({
  slideContent,
  showIndicator = false,
  bgColor = 'primary',
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

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on('select', handleSelect)
    return () => {
      api.off('select', handleSelect)
    }
  }, [api])

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

  return (
    <Carousel className="w-full max-w-[655px] mx-auto" setApi={setApi}>
      <CarouselContent className="h-[270px]">
        {slideContent?.map((content, index) => (
          <CarouselItem className="h-full" key={index}>
            <div className="p-1 h-full">
              <Card className="h-full relative rounded-none rounded-t-[1rem] overflow-hidden">
                <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                  <p className="text-4xl  text-center text-white font-[700]">{content.name}</p>
                  <TsaButton className="bg-background w-[160px] text-mid-blue border-mid-blue ">View Course</TsaButton>
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
