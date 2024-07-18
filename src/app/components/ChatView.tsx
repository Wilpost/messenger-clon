'use client'

import { useConversation } from '@/hooks/useConversation'
import { EmptyChat } from './EmptyChat'
import { FooterSubmit } from './FooterSubmit'
import HeaderConversation from './HeaderConversation'
import { getConversation } from '@/actions/getConversations'
import { useEffect, useState } from 'react'
import { Conversation } from '@prisma/client'

const ChatView = () => {
  const [conversation, setConversation] = useState<Conversation | null>()
  const { isOpen, converstationId } = useConversation()

  useEffect(() => {
    getConversation(converstationId).then(cv => {
      setConversation(cv)
    })

    console.log(conversation)
  }, [])

  return (
    <div
      className={`
        ${isOpen ? 'flex' : 'hidden'}
        w-full
        h-full
        flex-col
      `}>
      <HeaderConversation
        image={conversation?.image}
        name={conversation?.name}
      />

      <div
        className='
          w-full
          h-full
          relative
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
    </div>
  )
}

export default ChatView
