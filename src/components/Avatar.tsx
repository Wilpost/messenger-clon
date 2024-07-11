import { User } from '@prisma/client'
import Image from 'next/image'

export const Avatar = async ({ user }: { user?: User }) => {
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
          w-10
          grid
          place-content-center
        '>
        <Image
          className='object-cover rounded-full'
          src={user?.image || '/image/placeholder.jpg'}
          width={50}
          height={50}
          alt='Avatar o foto de perfil de el usuario'
        />
      </div>

      <span className='w-[11px] h-[11px] bg-green-500 absolute rounded-full ring-2 ring-primary top-0 right-1' />
    </div>
  )
}
