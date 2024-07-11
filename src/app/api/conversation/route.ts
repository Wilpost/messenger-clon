import { prisma } from '@/lib/prisma_db'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Obtengo los datos del body y los datos de la sessión del usuario
  const { name, isGroup, user } = await req.json()
  const session = await getServerSession(authOptions)

  const currentUserFound = await prisma.user.findUnique({
    where: { email: session?.user?.email as string }
  })

  const members = [user.id, currentUserFound?.id]

  if (!name || (members.length < 2 && !isGroup)) {
    return NextResponse.json({ error: 'Invalid data', status: 401 })
  }

  // if (verifyExistConversation) {
  //   return NextResponse.json({
  //     conversation_id: verifyExistConversation.id,
  //     error: 'Conversation exists',
  //     status: 302
  //   })
  // }

  // Genero un hash ID para la conversación nueva
  const conversationId = crypto.randomUUID()

  if (!isGroup) {
    let alredyExist = {
      exist: false,
      id_conversation: ''
    }

    const currentConversationsFounds = await prisma.conversation.findMany({
      include: {
        users: true
      }
    })

    currentConversationsFounds.map(item => {
      const value = item.users.some((cnvt, i) => {
        if (
          cnvt.id === user.id &&
          item.users[i + 1].id === currentUserFound?.id
        ) {
          alredyExist.id_conversation = item.id
          return true
        }

        return false
      })

      if (value) {
        alredyExist.exist = true
      }
    })

    console.log(alredyExist.exist)

    if (!alredyExist.exist) {
      await prisma.conversation.create({
        data: {
          id: conversationId,
          name,
          image: null,
          isGroup,
          users: {
            connect: [{ id: user.id }, { id: currentUserFound?.id }]
          }
        }
      })

      return NextResponse.json({
        conversation_id: conversationId,
        message: 'Conversation created',
        status: 201
      })
    }

    return NextResponse.json({
      status: 200,
      conversation_id: alredyExist.id_conversation
    })

    // await prisma.user.updateMany({
    //   where: {
    //     OR: [{id: user.id }, { id: currentUserFound?.id }]
    //   },
    //   data: {
    //     conversations: {
    //       connect: [{ id: conversationId }]
    //     }
    //   }
    // })
  }

  // if (isGroup) {
  //   await prisma.conversation.create({
  //     data: {
  //       id: conversationId,
  //       name,
  //       isGroup,
  //       image: null,
  //       users: {
  //         create: [...members.map((member: User) => member)]
  //       }
  //     }
  //   })
  // }
}
