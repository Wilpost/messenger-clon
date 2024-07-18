import { AiFillLike } from 'react-icons/ai'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { FaRegImage } from 'react-icons/fa6'
import clsx from 'clsx'

export function ChatInput() {
  const [messageValue, setMessageValue] = useState('')

  return (
    <>
      <figure
        className={clsx(
          `
            p-2
            rounded-full
            cursor-pointer
            hover:bg-secondary
            relative
            overflow-hidden
        `,
          messageValue !== '' && 'animate-wiggle duration-500 hidden'
        )}>
        {messageValue === '' && (
          <FaRegImage className='text-sky-500' size={20} />
        )}
      </figure>

      <input
        onChange={e => {
          setMessageValue(e.target.value)
        }}
        className={clsx(
          `
          w-full rounded-3xl p-[5px] pl-4 placeholder:text-gray-400 placeholder:font-normal bg-secondary outline-none text-normal text-textSecondary mt-1
        `
        )}
        placeholder='Aa'
        type='text'
      />

      <figure
        className='
            p-2
            rounded-full
            cursor-pointer
            hover:bg-secondary
        '>
        {messageValue === '' && (
          <AiFillLike className='text-sky-500' size={20} />
        )}
        {messageValue !== '' && <MdSend className='text-sky-500' size={20} />}
      </figure>
    </>
  )
}
