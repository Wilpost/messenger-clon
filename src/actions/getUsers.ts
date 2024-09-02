import prisma from '@/lib/prisma_db'

export async function getUsers(email: string | null | undefined) {
  const data = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    where: {
      NOT: {
        email
      }
    }
  })

  return data
}
