import clsx from 'clsx'
import Image from 'next/image'

interface IProps {
  disable?: boolean
  label?: string
  name?: string
  icon?: boolean
  id?: string
  type?: string
  placeholder?: string
}

export function AuthInput({ disable, name, placeholder, id, type }: IProps) {
  return (
    <>
      <label
        className={clsx(`
          text-sm
          font-normal
          flex
          w-full
          items-center
          bg-secondary
          rounded-3xl
          pl-4
        `)}
        htmlFor={id}>
        <Image
          width={20}
          height={20}
          src='/search_icon.svg'
          alt='Icono de busqueda'
        />

        <input
          className={clsx(
            `
          w-full rounded-3xl p-1 placeholder:text-gray-400-400 placeholder:font-light bg-secondary outline-none text-normal text-textSecondary mt-1
          `,
            disable && 'opacity-50 cursor-default select-none'
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
