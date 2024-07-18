'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { generateConversation } from '@/actions/createConversation'
import { useRouter } from 'next/navigation'

interface UserBoxProps {
  image?: string | null
  name: string | null | undefined
  status?: string | null
  active?: boolean
  email?: string | null
  isChat?: boolean
}

const UserBox: React.FC<UserBoxProps> = ({
  image,
  name,
  active = false,
  email,
  isChat = false,
  status
}) => {
  const router = useRouter()
  const { handleClick } = generateConversation()

  return (
    <div
      onClick={async () => {
        const id = await handleClick(email as string, name as string)

        router.push(`/conversations/${id}`)
      }}
      className={clsx(
        `
          h-full
          max-h-14
          w-full
          rounded-md
          flex
          items-center
          cursor-pointer
          hover:bg-neutral-700
          hover:bg-opacity-70
          justify-start
          gap-3
          lg:p-3
          p-4
        `,
        active && 'bg-neutral-700 bg-opacity-85'
      )}>
      <Image
        width={200}
        height={200}
        alt='Imagen del perfil de el usuario'
        src={image || '/image/placeholder.jpg'}
        className='
        rounded-full
        w-8
        h-8
        lg:w-10
        lg:h-10
        '
      />

      <div
        className='
        flex
        flex-col
        items-start
        text-white
        -leading-1
        '>
        <span className='text-white font-medium text-md'>{name}</span>
        {isChat && <p className='text-white font-medium text-md'>{status}</p>}
      </div>
    </div>
  )
}

export default UserBox
