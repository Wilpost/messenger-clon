export function EmptyConversation() {
  return (
    <div
      className={`
                w-full
                h-full
                flex
                justify-center
                items-center
                text-gray-800
                bg-slate-50
        `}>
      <h1 className='font-bold text-2xl'>
        Select a chat or start a new conversation
      </h1>
    </div>
  )
}
