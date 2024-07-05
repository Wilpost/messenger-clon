// import { getCurrentUser } from '@/app/actions/getCurrentUser'
import { Conversation } from '@/components/Conversation'
import { TbUsersPlus } from 'react-icons/tb'

export default async function ConverastionsPage() {
  // const data = await getCurrentUser()

  return (
    <>
      <header className='w-full px-4 h-14 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-950'>Messages</h1>

        <figure className='bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-full p-2 grid place-content-center'>
          <TbUsersPlus size={21} className='font-bold' color='#444' />
        </figure>
      </header>

      <div className='h-full flex flex-col gap-1'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  )
}
