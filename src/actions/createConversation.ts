import axios from '@/lib/axios'

export function generateConversation() {
  const handleClick = async (
    email: string | null,
    name: string | null,
    image: string | null
  ) => {
    try {
      const { data: conversationData } = await axios.post(
        '/conversation',
        JSON.stringify({
          name,
          isGroup: false,
          members: [],
          image,
          user: { email }
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
