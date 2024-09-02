import { getUserSession } from '@/actions/getSession'
import prisma from '@/lib/prisma_db'
import { User } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Obtengo los datos del body y los datos de la sessión del usuario
  const { name, isGroup, members, user, image } = await req.json()
  const session = await getUserSession()

  if (!user) {
    return NextResponse.json('Invalid data', { status: 400 })
  }

  // Obtengo el usuario loggeado actualmente
  const [user1, user2] = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: session?.user?.email
        },
        {
          email: user.email
        }
      ]
    }
  })

  if (!name || (members.length < 2 && isGroup)) {
    return NextResponse.json('Invalid data', { status: 401 })
  }

  // Genero un hash ID para la conversación nueva
  const conversationId = crypto.randomUUID()

  // Sino es grupo creo un conversación uno a uno
  if (!isGroup) {
    const [currentConversationsFounds] = await prisma.conversation.findMany({
      where: {
        AND: [
          {
            users: {
              some: {
                id: {
                  equals: user1?.id
                }
              }
            }
          },
          {
            users: {
              some: {
                id: {
                  equals: user2.id
                }
              }
            }
          }
        ]
      }
    })

    if (!currentConversationsFounds) {
      await prisma.conversation.create({
        data: {
          id: conversationId,
          name,
          image,
          isGroup,
          users: {
            connect: [{ id: user1?.id }, { id: user2.id }]
          }
        },
        include: {
          users: true
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
      conversation_id: currentConversationsFounds.id
    })
  }

  // Creo el chat grupal (#Grupo)
  if (isGroup) {
    await prisma.conversation.create({
      data: {
        id: conversationId,
        name,
        isGroup,
        image: null,
        users: {
          connect: [
            ...members.concat(user2).map((member: User) => ({
              id: member.id
            }))
          ]
        }
      }
    })
  }
}
