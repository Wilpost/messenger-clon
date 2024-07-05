import { DesktopSidebar } from '@/components/sidebar/DesktopSidebar'
import { MobileSidebar } from '@/components/sidebar/mobile/MobileSidebar'
import { EmptyConversation } from '@/components/EmptyItemConversation'
import { getUsers } from '@/app/actions/getUsers'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const users = getUsers()

  console.log(users)

  return (
    <>
      <section
        className={`
          w-full
          flex 
          h-screen
          bg-white
        `}>
        <DesktopSidebar />
        <MobileSidebar />

        <aside
          className='
        flex
        flex-col
        items-center
        h-full
        min-w-[300px]
      '>
          {children}
        </aside>

        <EmptyConversation />
      </section>
    </>
  )
}
