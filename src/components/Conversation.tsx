export function Conversation() {
  return (
    <div className='w-full max-h-16 p-2 hover:bg-secondary hover:bg-opacity-75 cursor-pointer rounded-md gap-2 flex items-center'>
      <figure className='h-full w-[48px] p-3 rounded-full bg-slate-400'></figure>

      <div className='w-full flex flex-col'>
        <h2 className='text-white font-normal text-md'>Conversations Name</h2>
        <span className='text-textSecondary font-bold text-sm'>
          Conversations State
        </span>
      </div>
    </div>
  )
}
