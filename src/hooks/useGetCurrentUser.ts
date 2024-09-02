'use client'

import prisma from '@/lib/prisma_db'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export const useGetCurrentUser = () => {
  const { data: session } = useSession()

  const userData = useMemo(async () => {
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
  }, [session?.user?.email])

  return userData
}
