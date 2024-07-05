import clsx from 'clsx'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface IProps {
  disable: boolean
  error?: boolean
  label: string
  name: string
  id: string
  type: string
  register: UseFormRegister<FieldValues>
}

export function Input({
  disable,
  error,
  label,
  name,
  id,
  type,
  register
}: IProps) {
  return (
    <>
      <label
        className={clsx(`
          text-sm font-medium
        `)}
        htmlFor={id}>
        {label}

        <input
          {...register(name)}
          className={clsx(
            `
          border-[1px] w-full border-zinc-300 rounded-md p-2 bg-white 
          focus:outline-sky-500 text-normal
          `,
            disable && 'opacity-50 cursor-default select-none',
            error && 'border-red-500 focus:outline-red-500'
          )}
          type={type}
          name={name}
          id={id}
        />
      </label>
    </>
  )
}
