import clsx from 'clsx'

interface ISidebarItemProps {
  label: string
  icon: any
  active: boolean
  onClick?: () => void
}

export const MobileSidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  icon: Icon,
  active,
  onClick
}) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        `
        w-full
        h-full
        text-gray-700
        hover:bg-gray-200
        hover:text-gray-800
        cursor-pointer
        grid
        place-content-center
        `,
        active && 'border-gray-500 border-t-2 text-gray-700 bg-gray-200'
      )}>
      <Icon className='w-6 h-6' />
      <span className='sr-only'>{label}</span>
    </li>
  )
}
