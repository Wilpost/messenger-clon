'use client'

import { useRoutes } from '@/hooks/useRoutes'
import { MobileSidebarItem } from './MobileSidebarItem'
import { useConversation } from '@/hooks/useConversation'
import clsx from 'clsx'

export function MobileSidebar() {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  return (
    <nav
      className={clsx(
        `
        lg:hidden
        border-t
        border-secondary
        w-full
        h-14
        flex
        bottom-0
        right-0
        bg-primary
        left-0
      `,
        isOpen ? 'hidden' : 'flex'
      )}>
      <ul
        role='list'
        className='
            flex
            justify-between
            w-full
        '>
        {routes.map(item => (
          <MobileSidebarItem
            key={item.label}
            active={item.active}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
          />
        ))}
      </ul>
    </nav>
  )
}
