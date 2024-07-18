import { prisma } from '@/lib/prisma_db'
import { NextResponse } from 'next/server'

export function GET(
  req: Request,
  { params }: { params: { conversationId: string } }
) {
  const conversationId = params.conversationId

  const userFound = prisma.conversation.findUnique({
    where: {
      id: conversationId
    },
    include: {
      users: true,
      messages: true
    }
  })

  return NextResponse.json({ data: { ...userFound } })
}
