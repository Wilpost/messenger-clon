'use client'

import { prisma } from '@/lib/prisma_db'
import { useSession } from 'next-auth/react'
import { useCallback } from 'react'

export const useGetCurrentUser = () => {
  const { data: session } = useSession()

  return useCallback(() => {
    async function handleUserCurrentData() {
      try {
        if (!session?.user?.email) {
          return null
        }

        const userFound = await prisma.user.findUnique({
          where: { email: session.user.email }
        })

        return userFound
      } catch (error: any) {
        return null
      }
    }

    return handleUserCurrentData()
  }, [session?.user?.email])
}
