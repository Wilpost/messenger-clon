'use client'

import { useEffect, useState } from 'react'
import { FooterSubmit } from './FooterSubmit'
import { useConversation } from '@/hooks/useConversation'
import { Conversation } from '@prisma/client'
import HeaderConversation from './HeaderConversation'
import { EmptyChat } from './EmptyChat'
import axios from '@/lib/axios'

const ChatView = () => {
  const [conversation, updateConversation] = useState<Conversation | null>(null)
  const { converstationId } = useConversation()

  useEffect(() => {
    axios.get(`/conversation/${converstationId}`).then(res => {
      const { data } = JSON.parse(res.data)
      updateConversation(data)
    })
  }, [])

  return (
    <>
      <HeaderConversation
        image={conversation?.image}
        name={conversation?.name}
      />

      <div
        className='
          w-full
          h-full
        '>
        <EmptyChat image={conversation?.image} name={conversation?.name} />
      </div>

      <div
        className='
          w-full
          p-5
        '>
        <FooterSubmit />
      </div>
    </>
  )
}

export default ChatView
