import prisma from '@/lib/prisma_db'
import { getUserSession } from './getSession'

export async function getConversation(id: string) {
  try {
    if (!id) {
      return null
    }

    const conversationFound = await prisma.conversation.findUnique({
      where: {
        id
      },
      include: {
        users: true
      }
    })

    return conversationFound
  } catch (error: any) {
    console.log(error)
  }
}

export async function getUserConversations() {
  const session = await getUserSession()

  try {
    const conversationsFound = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc'
      },
      where: {
        AND: {
          users: {
            some: {
              email: session?.user?.email as string
            }
          }
        }
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true
          }
        }
      }
    })

    return conversationsFound
  } catch (error: any) {
    console.log(error)
    return []
  }
}
