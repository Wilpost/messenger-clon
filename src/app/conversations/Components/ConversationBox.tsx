'use client'

import { FullConversationType, FullUserType } from '@/types'
import { Avatar } from '@/app/components/Avatar'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import getMessage from '@/actions/getMessage'

interface ConversartionBoxProps {
  isOpen: boolean
  conversation: FullConversationType
  user: FullUserType | null
}

export default function ConversationBox({
  conversation,
  isOpen,
  user
}: ConversartionBoxProps) {
  const [hasSeenMessage, setSeenMessage] = useState(false)
  const router = useRouter()

  // Obtener el último mensaje
  const lastMessages = useMemo(() => {
    if (conversation.messages.length !== 0) {
      return conversation.messages[conversation.messages.length - 1]
    }

    return null
  }, [conversation])

  // Validar que el usuario ya a visto los mensajes
  // const hasSeen = useMemo(async () => {
  //   const lastMessage = conversation.messages[conversation.messages.length - 1]
  //   const msg = await getMessage(lastMessage.id)
  //   const hasSeenMessageCurrentUser = msg?.seen.find(usr => usr.id === user?.id)

  //   if (hasSeenMessageCurrentUser) {
  //     setSeenMessage(true)
  //     return
  //   }
  //   // const userMessages = user?.seenMessages

  //   // return userMessages?.length !== 0

  //   setSeenMessage(false)
  // }, [conversation])

  // Devolver el texto apropiado según sea el caso
  const conversationStatusText = useMemo(() => {
    const messageBody = lastMessages

    if (!messageBody) {
      return 'Started converstion'
    }

    if (messageBody?.image !== null) {
      return 'Sent an image'
    }

    return messageBody?.body
  }, [lastMessages])

  const handleClick = (id: string) => {
    router.push(`/conversations/${id}&${user?.id}`)
  }

  useEffect(() => {
    ;(async () => {
      const lastMessage =
        conversation.messages[conversation.messages.length - 1]
      const msg = await getMessage(lastMessage.id)
      const hasSeenMessageCurrentUser = msg?.seen.find(
        usr => usr.id === user?.id
      )

      if (hasSeenMessageCurrentUser) {
        setSeenMessage(true)
        return
      }
      // const userMessages = user?.seenMessages

      // return userMessages?.length !== 0

      setSeenMessage(false)
    })()
  }, [conversation])

  return (
    <div
      onClick={() => handleClick(conversation.id)}
      key={conversation.id}
      className={clsx(
        `
            w-full
            cursor-pointer
            hover:bg-secondary
            hover:bg-opacity-70
            flex
            items-center
            rounded-md
            p-2
            gap-2
        `,
        isOpen && 'bg-secondary bg-opacity-45'
      )}>
      <figure>
        <Avatar src={conversation.image} medium />
      </figure>

      <div
        className='
            flex
            flex-col
            w-full
        '>
        <span
          className='
            text-md
            font-medium
            text-textSecondary
        '>
          {conversation.name}
        </span>

        <p
          className={clsx(
            `
            text-sm
            font-light
            -mt-1
            `,
            hasSeenMessage
              ? 'text-white font-normal'
              : 'text-zinc-100 font-semibold'
          )}>
          {conversationStatusText}
        </p>
      </div>
    </div>
  )
}
