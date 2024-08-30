import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React, { HTMLAttributes, useEffect, useRef } from 'react'

interface ThumbProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean
  index: string
  title: string
  onClick?: () => void
}

export const Thumb: React.FC<ThumbProps> = ({ selected, index, title, onClick, ...rest }) => {
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selected && thumbRef.current) {
      // Scroll the selected thumbnail into view if not visible
      thumbRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [selected])

  return (
    <div ref={thumbRef} {...rest}>
      <Card
        className={`w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm ${
          selected ? 'border border-blue-500' : ''
        }`}
        onClick={onClick}
      >
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
          <p className="text-xs text-center text-white font-semibold">{title}</p>
        </div>
        <Image width={100} height={100} className="w-full h-full object-cover" src={index} alt="logo" />
      </Card>
    </div>
  )
}
