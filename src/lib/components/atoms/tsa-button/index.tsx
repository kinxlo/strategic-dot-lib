'use client'

import { Button } from '@/components/ui/button'
import { TsaButtonProperties } from '@/types/index.types'
import { LoaderCircle, Plus } from 'lucide-react'
import Link from 'next/link'

import { cloneElement, FC, ReactElement } from 'react'

const TsaButton: FC<TsaButtonProperties> = ({
  type = 'button',
  variant,
  size,
  children,
  isLoading = false,
  isLeftIconVisible = false,
  isRightIconVisible = false,
  icon,
  isDisabled = false,
  isIconOnly = false,
  ariaLabel,
  href,
  className,
  onClick,
}) => {
  const modifiedIcon = icon ? (
    cloneElement(icon as ReactElement, {
      className: 'w-[1rem] h-[1rem]',
      'data-testid': 'icon',
    })
  ) : (
    <Plus className="h-[1rem] w-[1rem]" data-testid="icon" />
  )

  const buttonContent = (
    <>
      {isLeftIconVisible && !isLoading && modifiedIcon}
      {isLoading && <LoaderCircle className="h-[1rem] w-[1rem] animate-spin" data-testid="loading-spinner" />}
      {isIconOnly && !isLoading && modifiedIcon}
      {!isIconOnly && children}
      {!isIconOnly && !children && isLoading && 'Loading'}
      {isRightIconVisible && !isLoading && modifiedIcon}
    </>
  )

  if (href) {
    const isExternal = /^https?:\/\//.test(href)

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          <Button
            type={type}
            variant={variant}
            size={size}
            disabled={isDisabled}
            aria-label={ariaLabel}
            className={className}
            onClick={onClick}
            role="button"
          >
            {buttonContent}
          </Button>
        </a>
      )
    }

    return (
      <Link href={href} passHref aria-label={ariaLabel}>
        <Button
          variant={variant}
          size={size}
          disabled={isDisabled}
          aria-label={ariaLabel}
          className={className}
          onClick={onClick}
          role="button"
        >
          {buttonContent}
        </Button>
      </Link>
    )
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        disabled={isDisabled}
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
        role="button"
      >
        {buttonContent}
      </Button>
    </>
  )
}

export { TsaButton }
