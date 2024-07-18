import { DesktopSidebar } from '@/app/components/sidebar/DesktopSidebar'
import { MobileSidebar } from '@/app/components/sidebar/mobile/MobileSidebar'
import { EmptyConversation } from '@/app/components/NoSelectConversation'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className={`
          w-full
          p-2
          h-screen
          gap-2
          flex
        `}>
      <DesktopSidebar />

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
        overflow-hidden
        relative
      '>
        {children}
      </aside>

      <EmptyConversation />
    </section>
  )
}
