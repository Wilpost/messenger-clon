'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

  const handleClick = () => {
    router.push(href)

    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      onClick={() => handleClick()}
      className={clsx(
        'w-full p-2 cursor-pointer rounded-md h-full max-h-12 py-1 grid place-content-center',
        active && 'bg-secondary',
        !active && 'hover:bg-secondary hover:bg-opacity-70'
      )}>
      <li
        className={clsx(
          `
            flex
            items-center 
            justify-center
            w-full
            text-stone-400
            place-content-center
            hober:bg-opacity-75
            cursor-pointer
            `
        )}>
        <span className='sr-only'>{label}</span>
        <Icon className={clsx('w-6 h-6', active && 'text-white')} />
      </li>
    </div>
  )
}
