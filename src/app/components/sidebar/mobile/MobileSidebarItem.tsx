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
          text-zinc-400
          hover:bg-secondary 
          hover:text-textSecondary
          hover:bg-opacity-70
          cursor-pointer
          grid
          place-content-center
        `,
        active && 'text-textSecondary bg-secondary bg-opacity-75'
      )}>
      <Icon className='w-6 h-6' />
      <span className='sr-only'>{label}</span>
    </li>
  )
}
