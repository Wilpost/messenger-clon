export function Conversation() {
  return (
    <div className='w-full max-h-16 p-2 hover:bg-slate-100 cursor-pointer rounded-md gap-3 flex items-center'>
      <figure className='h-full w-[53px] p-3 rounded-full bg-slate-400'></figure>

      <div className='w-full flex flex-col'>
        <h2 className='text-zinc-900 font-medium text-lg'>
          Conversations Name
        </h2>
        <span className='text-zinc-600 font-normal text-md'>
          Conversations State
        </span>
      </div>
    </div>
  )
}
