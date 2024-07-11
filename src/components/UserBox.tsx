'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'

interface UserBoxProps {
  image: string | null
  name: string | null
  id: string
}

const UserBox: React.FC<UserBoxProps> = ({ image, name, id }) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      const { data: userData } = await axios.post(
        '/users',
        JSON.stringify({ id })
      )
      const { data: user } = JSON.parse(userData)

      const { data } = await axios.post(
        '/conversation',
        JSON.stringify({
          name: name,
          isGroup: false,
          user
        })
      )
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div
      onClick={handleClick}
      className='
        h-full
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
      '>
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
      </div>
    </div>
  )
}

export default UserBox
