import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/[...nextauth]/route'

export async function getUserSession() {
  const data = await getServerSession(authOptions)

  return data?.user
}
