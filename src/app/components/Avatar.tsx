'use client'

import { User } from '@prisma/client'
import Image from 'next/image'

export const Avatar = ({
  user,
  medium = false,
  xs = false,
  isActive = false,
  src
}: {
  user?: User
  isActive?: boolean
  medium?: boolean
  xs?: boolean
  src?: string | null
}) => {
  return (
    <div
      className='
        relative
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
          src={src || '/image/placeholder.jpg'}
          width={medium && medium ? 40 : 50 || (xs && xs) ? 30 : 40}
          height={medium && medium ? 40 : 50 || (xs && xs) ? 30 : 40}
          alt='Avatar o foto de perfil de el usuario'
        />
      </div>

      {isActive && (
        <span className='w-[11px] h-[11px] bg-green-500 absolute rounded-full ring-2 ring-primary bottom-0 right-0' />
      )}
    </div>
  )
}
