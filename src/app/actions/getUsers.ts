import { prisma } from '@/lib/prisma_db'
import { getCurrentUser } from './getCurrentUser'

export async function getUsers() {
  const user = await getCurrentUser()

  const users = await prisma.user.findMany({
    where: {
      NOT: {
        email: user?.email
      }
    }
  })

  console.log(users)
}
