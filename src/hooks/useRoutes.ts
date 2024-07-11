'use client'

import { useMemo } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useConversation } from './useConversation'

export function useRoutes() {
  const pathname = usePathname()
  const { converstationId } = useConversation()

  return useMemo(
    () => [
      {
        label: 'Chat',
        href: '/users',
        icon: HiUsers,
        active: pathname === '/users'
      },
      {
        label: 'Converstation',
        href: '/conversations',
        icon: TbMessages,
        active: pathname === '/conversations' || !!converstationId
      },
      {
        label: 'Logout',
        href: '/#',
        onClick: () => signOut(),
        icon: BiLogOut,
        active: pathname === '/logout'
      }
    ],
    [pathname, converstationId]
  )
}
