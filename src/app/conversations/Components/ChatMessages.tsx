import { Message } from '@prisma/client'
import MessagesSended from './MessagesSended'

function ChatMessages({
  conversationMessages
}: {
  conversationMessages: Message[]
}) {
  return (
    <section
      className='
            w-full
            h-full
            p-2
            px-4
            flex
            flex-col
        '>
      <div
        className='
            w-full
            flex
            flex-col
        '>
        <MessagesSended messages={conversationMessages} />
      </div>
    </section>
  )
}

export default ChatMessages
