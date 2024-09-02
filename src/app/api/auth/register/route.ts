import { validUserData } from '@/schemas/user.schema'
import prisma from '@/lib/prisma_db'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const { email, password, username } = body

  validUserData({ email, password, username })
  const userFounded = await prisma.user.findUnique({
    where: { email }
  })

  if (userFounded) {
    console.log('User alredy exist')
    throw new Error('User alredy exist')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const generateId = crypto.randomUUID()

  await prisma.user.create({
    data: {
      id: generateId,
      email,
      hashedPassword,
      name: username
    }
  })

  return NextResponse.json({ id: generateId, email, password })
}
