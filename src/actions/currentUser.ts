import { prisma } from '@/lib/prisma_db'

export async function getCurrentUser({ email }: { email?: string | null }) {
  if (!email) {
    return null
  }

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    return userFound
  } catch (error: any) {
    return null
  }
}
