import { prisma } from '@/lib/prisma_db'

export async function getConversation(id: string) {
  if (!id) {
    return null
  }

  try {
    const conversationFound = await prisma.conversation.findUnique({
      where: {
        id
      },
      include: {
        messages: true
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
