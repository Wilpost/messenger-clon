// import { getUserSession } from '@/app/actions/getSession'
import { Conversation } from '@/components/Conversation'
import { AuthInput } from '@/components/Inputs/Input'
import { TbUsersPlus } from 'react-icons/tb'

export default function ConverastionsPage() {
  // const data = getUserSession()

  // console.log(data)

  return (
    <>
      <div className='w-full bg-primary px-4 h-14 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-textSecondary'>Chats</h1>

        <figure className='hover:bg-secondary cursor-pointer rounded-full p-2 grid place-content-center'>
          <TbUsersPlus size={21} className='font-bold text-textSecondary' />
        </figure>
      </div>

      <div className='px-2 mb-4 w-full'>
        <AuthInput placeholder='Search in messenger' type='text' icon={true} />
      </div>

      <div className='h-full w-full px-2 flex flex-col gap-1'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  )
}
