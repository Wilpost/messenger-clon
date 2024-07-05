'use client'
import clsx from 'clsx'
import Link from 'next/link'

interface DesktopSidebarItemProps {
  label: string
  icon: any
  href: string
  active: boolean
  onClick?: () => void
}

export const DesktopSidebarItem: React.FC<DesktopSidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <Link href={href}>
      <div
        className={clsx(
          `
            h-14
            w-full
            hover:bg-gray-100
            hover:text-black
            cursor-pointer
            grid
            place-content-center
            `,
          active && 'text-black bg-gray-100'
        )}>
        <li
          onClick={() => handleClick()}
          className={clsx('flex items-center justify-center')}>
          <span className='sr-only'>{label}</span>
          <Icon className='w-6 h-6' />
        </li>
      </div>
    </Link>
  )
}
