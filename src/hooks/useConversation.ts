'use client'

import axios from '@/lib/axios'
import { User } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

export function useConversation(id?: string) {
  const params = useParams()

  const converstationId = useMemo(() => {
    if (!params?.converstationId) {
      return ''
    }

    return params?.converstationId as string
  }, [params?.converstationId])

  const isOpen = useMemo(
    () => converstationId === id ?? !!converstationId,
    [converstationId]
  )

  return useMemo(
    () => ({
      converstationId,
      isOpen
    }),
    [converstationId, isOpen]
  )
}

export async function useConversationLogic() {
  const router = useRouter()

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

      const { id } = JSON.parse(conversationData)

      router.push(`/conversations/${id}`)
    } catch (error: any) {
      console.log(error)
    }
  }

  return { handleClick }
}
