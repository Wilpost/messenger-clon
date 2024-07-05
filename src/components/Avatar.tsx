import { getCurrentUser } from '@/app/actions/getCurrentUser'
import Image from 'next/image'

export const Avatar = async () => {
  const user = await getCurrentUser()

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
          w-16
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

      <span className='w-[14px] h-[14px] bg-green-500 absolute rounded-full ring-2 ring-white top-[3px] right-[17px]' />
    </div>
  )
}
