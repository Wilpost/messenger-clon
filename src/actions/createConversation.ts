import axios from '@/lib/axios'
import { User } from '@prisma/client'

export function generateConversation() {
  const handleClick = async (email: string | null, name: string | null) => {
    try {
      const { data: userData } = await axios.get('/users')
      const { data }: { data: User[] } = JSON.parse(userData)
      const user = data.find(user => user.email === email)

      const { data: conversationData } = await axios.post(
        '/conversation',
        JSON.stringify({
          name,
          isGroup: false,
          members: [],
          user
        })
      )

      const { conversation_id } = JSON.parse(conversationData)

      return conversation_id
    } catch (error: any) {
      console.log(error)
    }
  }

  return { handleClick }
}
