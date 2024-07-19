import { prisma } from '@/lib/prisma_db'

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
  try {
    const conversationsFound = await prisma.conversation.findMany({
      include: {
        messages: true
      }
    })

    return conversationsFound
  } catch (error: any) {
    console.log(error)
  }
}
