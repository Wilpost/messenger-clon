import { DesktopSidebar } from '@/components/sidebar/DesktopSidebar'
import { MobileSidebar } from '@/components/sidebar/mobile/MobileSidebar'
import { EmptyConversation } from '@/components/EmptyItemConversation'
import { getUsers } from '@/actions/getUsers'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const users = await getUsers()

  return (
    <section
      className={`
          w-full
          p-2
          flex 
          h-screen
          gap-2
        `}>
      <DesktopSidebar />
      <MobileSidebar />

      <aside
        className='
        flex
        rounded-xl
        w-full
        bg-primary
        flex-col
        items-center
        h-full
        lg:max-w-[300px]
      '>
        {children}
      </aside>

      <EmptyConversation />
    </section>
  )
}
