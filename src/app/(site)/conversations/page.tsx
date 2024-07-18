import ChatView from '@/app/components/ChatView'
import { EmptyConversation } from '@/app/components/NoSelectConversation'

export default function ConversationsPage() {
  return (
    <>
      <EmptyConversation />
      <ChatView />
    </>
  )
}
