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
    <Link
      className={clsx(
        'w-full p-2 rounded-md h-full max-h-12 py-1 grid place-content-center',
        active && 'bg-secondary',
        !active && 'hover:bg-secondary hover:bg-opacity-70'
      )}
      href={href}>
      <div
        className={clsx(
          `
            w-full
            text-stone-400
            grid place-content-center
            hober:bg-opacity-75
            cursor-pointer
            `
        )}>
        <li
          onClick={() => handleClick()}
          className={clsx('flex items-center justify-center')}>
          <span className='sr-only'>{label}</span>
          <Icon className={clsx('w-6 h-6', active && 'text-white')} />
        </li>
      </div>
    </Link>
  )
}
