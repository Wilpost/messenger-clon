'use client'

import { useRoutes } from '@/hooks/useRoutes'
import { DesktopSidebarItem } from './DesktopSidebarItem'
import { Avatar } from '../Avatar'

export const DesktopSidebar = () => {
  const routes = useRoutes()

  return (
    <div
      className='
        hidden

        lg:bottom-0 
        lg:flex
        lg:w-full
        lg:max-w-12
        lg:h-full
        lg:py-3
        lg:flex-col 
        lg:justify-between'>
      <nav
        className='
        h-full
        w-full
      '>
        <ul
          className={`
          items-center
          flex
          flex-col
          w-full
          h-full
          justify-start
          overflow-y-auto
        `}>
          {routes.map(item => {
            return (
              <DesktopSidebarItem
                href={item.href}
                key={item.label}
                active={item.active}
                icon={item.icon}
                label={item.label}
                onClick={item?.onClick}
              />
            )
          })}
        </ul>
      </nav>

      <nav>
        <ul
          role='list'
          className='relative w-full flex justify-center items-center'>
          <Avatar isActive={true} />
        </ul>
      </nav>
    </div>
  )
}
