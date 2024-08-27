import { FC, useEffect, useState } from 'react'
import { InfoIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export interface CustomInputProperties {
  label?: string
  isRequired?: boolean
  state?: 'default' | 'primary' | 'error'
  name?: string
  placeholder: string
  type?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  isDisabled?: boolean
  className?: string
  helpText?: string
  validate?: (value: string) => boolean
}

export const TsaInput: FC<CustomInputProperties> = ({
  label,
  isRequired = true,
  state: initialState = 'default',
  helpText = 'Hi there!',
  name,
  placeholder,
  type = 'text',
  value: propertyValue,
  onChange,
  onFocus,
  isDisabled,
  className,
  validate,
}) => {
  const [inputValue, setInputValue] = useState(propertyValue || '')
  const [error, setError] = useState(false)
  const [state, setState] = useState<'default' | 'primary' | 'error'>(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    if (onChange) onChange(event)

    // Validation logic
    let validationError = false
    if (validate) {
      validationError = !validate(value)
    } else if (type === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      validationError = !emailPattern.test(value)
    }

    // setError(validationError)
    setState(validationError ? 'error' : 'primary')
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event)
    setState('primary')
  }

  useEffect(() => {
    setInputValue(propertyValue || '')
    setError(false) // Reset error state when value prop changes
  }, [propertyValue])

  const getBorderClass = () => {
    switch (state) {
      case 'error':
        return 'border-destructive'
      case 'primary':
        return 'border-primary'
      default:
        return 'border-border'
    }
  }

  const getHelperTextClass = () => {
    return state === 'error' ? 'text-destructive' : 'text-foreground'
  }

  return (
    <div className={cn('flex flex-col gap-2')}>
      {label && (
        <label className={cn('text-sm font-medium text-foreground')}>
          {label}
          {!isRequired && <span className="text-xs font-light ml-1">(Optional)</span>}
        </label>
      )}
      <Input
        disabled={isDisabled}
        name={name}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        className={cn(getBorderClass(), className)}
        aria-invalid={state === 'error' ? 'true' : undefined}
      />
      {helpText && (
        <div className={cn('flex items-center gap-1 text-xs', getHelperTextClass())}>
          <InfoIcon size="14px" />
          <span>{helpText}</span>
        </div>
      )}
    </div>
  )
}
