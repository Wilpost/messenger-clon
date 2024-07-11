'use client'

import clsx from 'clsx'

interface IButtonProps {
  children: React.ReactNode
  disable: boolean
  oauth?: boolean
  type?: 'button' | 'submit' | 'reset'
  error?: boolean
  loading?: boolean
  credentials?: boolean
  onClick?: () => void
}

export function Button({
  children,
  disable = false,
  oauth = false,
  type = 'button',
  error = false,
  loading,
  onClick = () => '',
  credentials = false
}: IButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      disabled={disable}
      type={type}
      className={clsx(
        `
        w-full rounded-md text-md text-white font-semibold flex items-center justify-center py-2
      `,
        oauth && 'border-[1px] border-secondary bg-primary',
        disable && 'opacity-50',
        loading && 'opacity-50',
        error && 'bg-red-600 hover:bg-red-500',
        credentials && 'bg-sky-500'
      )}>
      {children}
    </button>
  )
}
