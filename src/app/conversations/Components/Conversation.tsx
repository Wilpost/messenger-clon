'use client'

import { FullConversationType, FullUserType } from '@/types'
import { useConversation } from '@/hooks/useConversation'
import ConversationBox from './ConversationBox'

export const UserConversationsList = async ({
  user,
  conversations
}: {
  conversations: FullConversationType[]
  user: FullUserType | null
}) => {
  return (
    <>
      <section
        className='
            w-full 
            h-full 
            relative 
            p-2 
            gap-2 
            flex 
            flex-col
          '>
        {conversations?.map(conversation => {
          const { isOpen } = useConversation(conversation.id)
          console.log('conversation >> ', conversation)

          return (
            <ConversationBox
              key={conversation.id}
              user={user}
              isOpen={isOpen}
              conversation={conversation}
            />
          )
        })}
      </section>
    </>
  )
}
