'use client'

import { useRoutes } from '@/hooks/useRoutes'
import { MobileSidebarItem } from './MobileSidebarItem'

export function MobileSidebar() {
  const routes = useRoutes()
  return (
    <nav
      className='
        lg:hidden

        w-full
        h-16
        flex
        absolute
        bottom-0
        right-0
        bg-white
        left-0
    '>
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
