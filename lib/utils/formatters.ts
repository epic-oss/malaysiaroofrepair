import { siteConfig } from '@/lib/config'

/**
 * Format price in Malaysian Ringgit
 */
export function formatPrice(amount: number, currency: string = siteConfig.currency): string {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format Malaysian phone number
 * Accepts: 0123456789, +60123456789, 60123456789
 * Returns: +60 12-345 6789
 */
export function formatPhone(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')

  // If starts with 60, it's already country code
  if (cleaned.startsWith('60')) {
    const number = cleaned.substring(2)
    if (number.length >= 9) {
      return `+60 ${number.substring(0, 2)}-${number.substring(2, 5)} ${number.substring(5)}`
    }
  }

  // If starts with 0, remove it and add country code
  if (cleaned.startsWith('0')) {
    const number = cleaned.substring(1)
    if (number.length >= 9) {
      return `+60 ${number.substring(0, 2)}-${number.substring(2, 5)} ${number.substring(5)}`
    }
  }

  // Return as-is if can't format
  return phone
}

/**
 * Format date to Malaysian locale
 * Uses currentYear from config for consistency
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return new Intl.DateTimeFormat('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

/**
 * Format date to relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  }

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds)
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`
    }
  }

  return 'Just now'
}
