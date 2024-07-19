import Link from 'next/link'
import { Avatar } from './Avatar'
import { getUserConversations } from '@/actions/getConversations'

export const UserConversationsList = async () => {
  const conversationList = await getUserConversations()

  return (
    <>
      <section className='w-full h-full relative p-2 gap-2 flex flex-col'>
        {conversationList?.map(conversation => {
          return (
            <Link
              href={`/conversations/${conversation.id}`}
              key={conversation.id}>
              <div
                className='
                w-full
                cursor-pointer
                hover:bg-secondary
                hover:bg-opacity-70
                flex
                items-center
                rounded-md
                p-2
                gap-2
              '>
                <figure>
                  <Avatar src={conversation.image} />
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
                    className='
                    text-sm
                    font-light
                    text-zinc-400
                  '>
                    You are now connected...
                    {/* {conversation.createdAt.toString()} */}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </>
  )
}
