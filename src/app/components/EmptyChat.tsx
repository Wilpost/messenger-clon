import { Avatar } from './Avatar'

interface EmptyChatProps {
  name?: string | null
  image?: string | null
}

export const EmptyChat: React.FC<EmptyChatProps> = ({ name, image }) => {
  return (
    <div
      className='
          w-full
          h-full
          pt-5
          flex
          flex-col
          items-center
          justify-between
        '>
      <figure
        className='
            text-center
            font-semibold
            text-lg
            text-textSecondary
          '>
        <Avatar src={image} medium />
        <span>{name}</span>
      </figure>
      <span
        className='
            text-zinc-500
            text-sm
            font-medium
          '>
        You are now connected on Messenger.
      </span>
    </div>
  )
}
