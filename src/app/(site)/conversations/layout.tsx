import { UserConversationsList } from '@/app/components/Conversation'
import { Input } from '@/app/components/Inputs/SearchInput'
import { DesktopSidebar } from '@/app/components/sidebar/DesktopSidebar'
import { MobileSidebar } from '@/app/components/sidebar/mobile/MobileSidebar'
import { TbUsersPlus } from 'react-icons/tb'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className={`
          w-full
          md:p-2
          flex
          md:flex-row
          flex-col
          h-screen
          md:gap-3
        `}>
      <DesktopSidebar />

      <main
        className='
          w-full
          h-full
          flex
          p-2
          gap-4
        '>
        <section className='shadow-2xl hidden md:flex bg-primary rounded-xl md:max-w-96 flex-col items-center justify-center w-full h-full gap-3'>
          <div className='w-full px-4 h-14 flex items-center justify-between'>
            <h1 className='text-2xl font-extrabold text-textSecondary'>
              Chats
            </h1>

            <figure className='hover:bg-secondary cursor-pointer rounded-full p-2 grid place-content-center'>
              <TbUsersPlus size={21} className='font-bold text-textSecondary' />
            </figure>
          </div>

          <div className='px-4 mb-4 w-full'>
            <Input placeholder='Search in messenger' type='text' icon={true} />
          </div>

          <div className='h-full w-full px-2 flex flex-col gap-1'>
            <UserConversationsList />
          </div>
        </section>

        <div
          className='
          shadow-2xl
          w-full
          h-full
          bg-primary
          rounded-md
        '>
          {children}
        </div>
      </main>
      <MobileSidebar />
    </section>
  )
}
