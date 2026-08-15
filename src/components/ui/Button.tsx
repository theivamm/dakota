import { Link } from 'react-router-dom'
import type { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  to?: string
  href?: string
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  id?: string
  ariaLabel?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const cx = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ')

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  children,
  className,
  type = 'button',
  disabled = false,
  id,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = cx(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  )

  if (to) {
    return (
      <Link to={to} id={id} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} id={id} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      id={id}
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
