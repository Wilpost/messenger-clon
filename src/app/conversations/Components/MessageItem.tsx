import { Avatar } from '@/app/components/Avatar'
import clsx from 'clsx'

type MessageItemProps = {
  bodyMessage: string
  isSender?: boolean
  image?: string | null
  isRead?: boolean // Esto solo aparece en el ultimo mensaje enviado y cuando en isSender sea true
  isLastMessage: boolean
}

function MessageItem({
  bodyMessage,
  isSender = true,
  image = null,
  isRead = false,
  isLastMessage = false
}: MessageItemProps) {
  return (
    <div
      className={clsx(
        `w-auto flex flex-col gap-[3px]`,
        isSender ? 'justify-end items-end' : 'justify-start items-start'
      )}>
      {isLastMessage && <Avatar xs={true} />}
      {image && (
        <figure
          className='
              w-32
              group
              rounded-md
              relative
              overflow-hidden
            '>
          <img
            src={image}
            className='group-hover:scale-125 cursor-pointer transition object-contain'
            alt='Imagen'
          />
        </figure>
      )}
      <div
        className={clsx(
          `
        py-1
        text-base
        px-2
        w-auto
        text-white`,
          isSender
            ? 'bg-sky-500 rounded-3xl rounded-tr-sm'
            : 'bg-zinc-600 rounded-3xl rounded-tl-sm'
        )}>
        <h2>{bodyMessage}</h2>
      </div>
    </div>
  )
}

export default MessageItem
