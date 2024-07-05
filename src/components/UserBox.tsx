'use client'

import { User } from '@prisma/client'
import Image from 'next/image'

const UserBox: React.FC<User> = ({ image, name }) => {
  return (
    <div
      className='
            w-full
            flex
            items-center
            justify-start
            gap-1
            '>
      <Image
        alt='Imagen del perfil de el usuario'
        src={image || '/image/placeholder.jpg'}
        className='
        rounded-full
        w-7
        h-7
        bg-gray-600
        '
      />

      <div
        className='
        flex
        flex-col
        items-start
        text-black
        -leading-1
        '>
        <strong>{name}</strong>
      </div>
    </div>
  )
}

export default UserBox
