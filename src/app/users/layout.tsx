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
          h-screen
          gap-2
          p-2
          flex
        `}>
      <DesktopSidebar />

      <main className='p-1 py-2 pr-2 shadow-2xl hidden md:flex rounded-xl gap-3 items-center w-full h-full'>
        <div
          className='
          shadow-2xl
          w-full
          max-w-96
          h-full
          flex
          flex-col
          bg-primary
          rounded-xl
        '>
          {children}
        </div>

        <EmptyConversation />
      </main>

      <MobileSidebar />
    </section>
  )
}
