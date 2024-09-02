import { Conversation, Message } from '@prisma/client'
import { Conversation, Message, User, UserSeenMessage } from '@prisma/client'

export type UserConversationsListProps = Conversation & Message

export type StateLoadingProps = {
  auth: boolean
  github: boolean
  google: boolean
}

export type FullUserType = User & {
  seenMessages: UserSeenMessage[]
}

export type FullMessageType = Message & {
  sender: User
  seen: User[]
}

export type FullConversationType = Conversation & {
  users: User[]
  messages: Message[]
}
