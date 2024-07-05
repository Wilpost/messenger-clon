import { prisma } from '@/lib/prisma_db'
import { authOptions } from '@/utils/sessionAuthOption'
import { getServerSession } from 'next-auth/next'
// import { getSession } from './getSession'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return null
  }

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    })

    return userFound
  } catch (error: any) {
    return null
  }
}
