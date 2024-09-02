import getConversationById from '@/actions/getConversationById'
import { getCurrentUser } from '@/actions/currentUser'
import { getUserSession } from '@/actions/getSession'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma_db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { message, image, conversationId } = body

    // Obtener los usuarios de la conversación
    const userSession = await getUserSession()
    const currentUser = await getCurrentUser({
      email: userSession?.user?.email
    })

    const { users } = await getConversationById(conversationId)
    const outherUser = users.find(item => item.email !== currentUser?.id)

    // Crear mensajes con sus respectivas relaciones
    if (!image) {
      const newMessage = await prisma.message.create({
        data: {
          body: message as string,
          image: image,
          senderId: currentUser?.id as string,
          conversationId,
          seen: {
            connect: { id: currentUser?.id as string }
          }
        }
      })

      await prisma.conversation.update({
        where: {
          id: conversationId
        },
        data: {
          lastMessageAt: new Date(),
          messages: {
            connect: {
              id: newMessage.id
            }
          }
        },
        include: {
          users: true,
          messages: {
            include: {
              seen: true
            }
          }
        }
      })

      return NextResponse.json(
        { message: 'Message created succesfully', data: newMessage },
        { status: 201 }
      )
    }
  } catch (error: any) {
    console.log(error)

    return NextResponse.json('Internal server error', { status: 401 })
  }
}
