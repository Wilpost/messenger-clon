import { EmptyConversation } from '@/components/EmptyItemConversation'

export default function ConverastionPage() {
  return (
    <>
      <div className='w-full h-full [grid-area: main] border-r-[1px] border-r-slate-300 grid place-content-center'>
        <EmptyConversation />
      </div>
    </>
  )
}
