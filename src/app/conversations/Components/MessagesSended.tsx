import { Message } from '@prisma/client'
import MessageItem from './MessageItem'
import { getUserSession } from '@/actions/getSession'
import { getCurrentUser } from '@/actions/currentUser'
import clsx from 'clsx'

interface MessagesProps {
  messages: Message[]
}

async function MessagesSended({ messages }: MessagesProps) {
  const session = await getUserSession()
  const currentSessionUser = await getCurrentUser({
    email: session?.user?.email
  })

  return (
    <div className={clsx(`w-full flex flex-col gap-3`)}>
      {messages.map((message, idx) => {
        const isSender = currentSessionUser?.id === message.senderId

        return (
          <MessageItem
            key={message.id}
            bodyMessage={message.body}
            isLastMessage={idx + 1 === undefined}
            isSender={isSender}
            image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
          />
        )
      })}
    </div>
  )
}

export default MessagesSended
