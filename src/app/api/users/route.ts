import { prisma } from '@/lib/prisma_db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id } = await req.json()

  const userFound = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return NextResponse.json({ status: 200, data: userFound })
}
