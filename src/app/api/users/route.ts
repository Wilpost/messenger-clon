import { prisma } from '@/lib/prisma_db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const users = await prisma.user.findMany()

  if (!users) {
    return NextResponse.json({ status: 404, message: 'Not Found' })
  }

  return NextResponse.json({ status: 200, data: users })
}
