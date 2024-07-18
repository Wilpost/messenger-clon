import { User } from '@prisma/client'
import Image from 'next/image'

export const Avatar = async ({
  user,
  src,
  medium = false,
  isActive = false
}: {
  user?: User
  src?: string | null
  isActive?: boolean
  medium?: boolean
}) => {
  return (
    <div
      className='
        relative
        w-full
        flex
        items-center
        justify-center
      '>
      <div
        className='
          w-auto
          grid
          place-content-center
        '>
        <Image
          className='object-cover rounded-full'
          src={src || user?.image || '/image/placeholder.jpg'}
          width={medium ? 40 : 50}
          height={medium ? 40 : 50}
          alt='Avatar o foto de perfil de el usuario'
        />
      </div>

      {isActive && (
        <span className='w-[11px] h-[11px] bg-green-500 absolute rounded-full ring-2 ring-primary top-0 right-1' />
      )}
    </div>
  )
}
