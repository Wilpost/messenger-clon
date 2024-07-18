import { getUserSession } from '@/actions/getSession'
import { prisma } from '@/lib/prisma_db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Obtengo los datos del body y los datos de la sessión del usuario
  const { name, isGroup, members, user } = await req.json()
  const session = await getUserSession()

  if (!user) {
    return NextResponse.json('Invalid data', { status: 400 })
  }

  const userFound = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string
    }
  })

  if (!name || (members.length < 2 && isGroup)) {
    return NextResponse.json('Invalid data', { status: 401 })
  }

  // Genero un hash ID para la conversación nueva
  const conversationId = crypto.randomUUID()

  if (!isGroup) {
    const [currentConversationsFounds] = await prisma.conversation.findMany({
      where: {
        AND: [
          {
            users: {
              some: {
                id: {
                  equals: userFound?.id
                }
              }
            }
          },
          {
            users: {
              some: {
                id: {
                  equals: user.id
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
          image: null,
          isGroup,
          users: {
            connect: [{ id: userFound?.id }, { id: user.id }]
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
