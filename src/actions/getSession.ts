import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/[...nextauth]/route'

export async function getUserSession() {
  return await getServerSession(authOptions)
}
