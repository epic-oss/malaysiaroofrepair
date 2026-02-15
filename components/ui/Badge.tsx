import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'premium' | 'emergency' | 'success'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            'bg-primary-100 text-primary-800': variant === 'default',
            'bg-gray-100 text-gray-800': variant === 'secondary',
            'border border-gray-300 text-gray-700 bg-white': variant === 'outline',
            'bg-gold-500 text-white shadow-sm': variant === 'premium',
            'bg-red-600 text-white animate-pulse': variant === 'emergency',
            'bg-green-100 text-green-800': variant === 'success',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
