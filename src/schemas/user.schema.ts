import { z } from 'zod'

interface UserData {
  username: string
  email: string
  password: string
}

const userSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().min(2),
  password: z.string().min(5)
})

export const validUserData = (data: UserData) => {
  return userSchema.safeParse(data)
}
