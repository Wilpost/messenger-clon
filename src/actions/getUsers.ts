import { prisma } from '@/lib/prisma_db'
import { getUserSession } from './getSession'

export function getUsers() {
  const users = getUserSession().then(async user => {
    return await prisma.user.findMany({
      where: {
        NOT: {
          email: user?.email
        }
      }
    })
  })

  return users
}
