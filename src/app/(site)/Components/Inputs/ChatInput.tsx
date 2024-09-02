'use client'

import clsx from 'clsx'
import { AiFillLike } from 'react-icons/ai'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { FaRegImage } from 'react-icons/fa6'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputIProps {
  register: UseFormRegister<FieldValues | { messages: string }>
  disable?: boolean
  // errors?: FieldErrors<FieldValues> | boolean
}

export function ChatInput({
  register,
  disable = false
}: // errors = false
InputIProps) {
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
        {...register('bodyMessage', { required: true })}
        onChange={e => {
          setMessageValue(e.target.value)
        }}
        className={clsx(
          `
          w-full rounded-3xl p-[5px] pl-4 placeholder:text-gray-400 placeholder:font-normal bg-secondary outline-none text-normal text-textSecondary mt-1
          `,
          disable && 'opacity-50 cursor-default'
        )}
        placeholder='Aa'
        type='text'
      />

      <button
        type='submit'
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
      </button>
    </>
  )
}
