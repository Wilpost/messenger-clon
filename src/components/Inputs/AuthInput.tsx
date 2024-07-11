import clsx from 'clsx'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface IProps {
  disable?: boolean
  error?: boolean
  label?: string
  name: string
  id?: string
  type?: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
}

export function Input({
  disable,
  error,
  label,
  name,
  placeholder,
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
          w-full rounded-3xl p-2 pl-4 placeholder:text-gray-400-400 placeholder:font-light bg-secondary outline-none text-normal text-textSecondary mt-1
          `,
            disable && 'opacity-50 cursor-default select-none',
            error && 'border-red-500 focus:outline-red-500'
          )}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
        />
      </label>
    </>
  )
}
