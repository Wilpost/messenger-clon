import getConversationById from '@/actions/getConversationById'
import { EmptyChat } from '@/app/components/EmptyChat'
import { FooterSubmit } from '@/app/components/FooterSubmit'
import HeaderConversation from '@/app/components/HeaderConversation'
import ChatMessages from '../Components/ChatMessages'

export default async function ConversationPage({
  params
}: {
  params: { conversationId: string }
}) {
  const conversation = await getConversationById(params.conversationId)

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
        {conversation.messages.length === 0 && (
          <EmptyChat name={conversation?.name} image={conversation.image} />
        )}

        {conversation.messages.length > 0 && (
          <ChatMessages conversationMessages={conversation.messages} />
        )}
      </div>

      <div
        className='
          w-full
          p-5
        '>
        <FooterSubmit conversationId={params.conversationId} />
      </div>
    </>
  )
}
