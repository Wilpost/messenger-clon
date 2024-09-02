import prisma from '../lib/prisma_db'

async function getConversationById(id: string) {
  // const updateConversation = await prisma.conversation.update({
  //   where: {
  //     id
  //   },
  //   data: {
  //     users: {
  //       connect: {
  //         id
  //       }
  //     }
  //   }
  // })

  const conversationFound = await prisma.conversation.findUnique({
    where: {
      id
    },
    include: {
      messages: {
        include: {
          sender: true
        }
      },
      users: {
        include: {
          seenMessages: true
        }
      }
    }
  })

  if (!conversationFound?.name) {
    throw new Error('Conversation not found')
  }

  return conversationFound
}

export default getConversationById
