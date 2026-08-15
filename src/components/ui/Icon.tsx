import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'menu'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'check'
  | 'palette'
  | 'type'
  | 'image'
  | 'layout'
  | 'grid'
  | 'spark'
  | 'fitness'
  | 'cycling'
  | 'outdoor'
  | 'ball'
  | 'mobility'
  | 'accessories'

const paths: Record<IconName, ReactNode> = {
  menu: (
    <>
      <line x1="4" y1="6.5" x2="20" y2="6.5" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17.5" x2="20" y2="17.5" />
    </>
  ),
  close: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  'chevron-left': <polyline points="14.5 5 8 12 14.5 19" />,
  'chevron-right': <polyline points="9.5 5 16 12 9.5 19" />,
  'arrow-right': (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </>
  ),
  'arrow-up-right': (
    <>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="9 6 18 6 18 15" />
    </>
  ),
  check: <polyline points="5 12.5 10 17.5 19 7" />,
  palette: <path d="M12 2.69 17.66 8.35a8 8 0 1 1-11.32 0Z" />,
  type: (
    <>
      <path d="M4 20 10 6h4l6 14" />
      <path d="M7.5 15h9" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.6" />
      <path d="m21 15-4.2-4.2a2 2 0 0 0-2.8 0L6 19" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  spark: (
    <path d="m12 3 1.9 5.7L20 10.5l-6.1 1.8L12 18l-1.9-5.7L4 10.5l6.1-1.8L12 3Z" />
  ),
  fitness: (
    <>
      <line x1="5.5" y1="9" x2="18.5" y2="9" />
      <line x1="5.5" y1="15" x2="18.5" y2="15" />
      <line x1="8.5" y1="9" x2="8.5" y2="15" />
      <line x1="15.5" y1="9" x2="15.5" y2="15" />
      <rect x="2.5" y="7.5" width="2" height="9" rx="1" />
      <rect x="19.5" y="7.5" width="2" height="9" rx="1" />
    </>
  ),
  cycling: (
    <>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </>
  ),
  outdoor: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 5.5c-2 3.4-2 9.6 0 13" />
      <path d="M15.5 5.5c2 3.4 2 9.6 0 13" />
      <path d="M6 9.5c3.4-1 8.6-1 12 0" />
      <path d="M6 14.5c3.4 1 8.6 1 12 0" />
    </>
  ),
  mobility: (
    <>
      <path d="M5 19 17 7" />
      <path d="M12 7h5v5" />
      <circle cx="7" cy="17" r="1" />
      <circle cx="11" cy="13" r="1" />
      <circle cx="15" cy="9" r="1" />
    </>
  ),
  accessories: (
    <>
      <path d="M5 11h14l-1.5 9a2 2 0 0 1-2 1.5h-7A2 2 0 0 1 6.5 20L5 11Z" />
      <path d="M9 11V8a3 3 0 0 1 6 0v3" />
      <path d="M9 15.5h6" />
    </>
  ),
}

type IconProps = {
  name: IconName
  size?: number
  className?: string
  strokeWidth?: number
} & Pick<SVGProps<SVGSVGElement>, 'aria-hidden' | 'aria-label'>

export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.8,
  ...rest
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
