export function EmptyConversation() {
  return (
    <div
      className={`
          hidden
          w-full
          h-full
          md:flex
          justify-center
          items-center
          text-textSecondary
          rounded-xl
          bg-primary
        `}>
      <h1 className='font-bold text-2xl'>
        Select a chat or start a new conversation
      </h1>
    </div>
  )
}
