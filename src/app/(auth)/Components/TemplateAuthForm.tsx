'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { Input } from '../../../components/Inputs/Input'
import { Button } from '../../../components/buttons/Button'
import { signIn } from 'next-auth/react'
import { useDataForm } from '@/hooks/useForm'

type Variant = 'LOGIN' | 'REGISTER'

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLogin, setIsLogin] = useState<Variant>('LOGIN')

  const { onSubmit, register, handleSubmit } = useDataForm(setIsLoading)

  const toggleVariant = () => {
    if (isLogin === 'LOGIN') {
      return setIsLogin('REGISTER')
    }

    setIsLogin('LOGIN')
  }

  return (
    <section
      className={`
        w-full h-full grid place-content-center
      `}>
      <figure className='w-full mb-2 flex justify-center'>
        <Image
          width={60}
          height={60}
          src='/logo.png'
          alt='Hero logo wiht authentication'
        />
      </figure>

      <h1 className='w-full text-center mb-3 text-3xl font-bold'>
        Sign in to your account
      </h1>

      <form
        onSubmit={handleSubmit(data => onSubmit(isLogin, data))}
        className={`
          w-[460px] rounded-md p-10 flex flex-col gap-4
          bg-white
        `}>
        {isLogin === 'REGISTER' && (
          <Input
            register={register}
            id='username'
            type='username'
            label='username'
            name='username'
            disable={isLoading}
          />
        )}

        <Input
          register={register}
          id='email'
          type='email'
          label='Email address'
          name='email'
          disable={isLoading}
        />

        <Input
          register={register}
          id='password'
          type='password'
          label='Password'
          name='password'
          disable={isLoading}
        />

        {isLogin === 'LOGIN' && (
          <Button
            type='submit'
            credentials={true}
            disable={isLoading}
            loading={isLoading}>
            Sign in
          </Button>
        )}

        {isLogin === 'REGISTER' && (
          <Button
            type='submit'
            credentials={true}
            disable={isLoading}
            loading={isLoading}>
            Sign Up
          </Button>
        )}

        <div className='w-full relative mt-2 h-[1px] bg-zinc-300'>
          <span className='absolute -top-[10px] px-2 text-sm left-[35%] bg-white text-zinc-500'>
            Or continue with
          </span>
        </div>

        <div className='w-full flex gap-2 items-center'>
          <Button
            onClick={() => signIn('github')}
            disable={isLoading}
            loading={isLoading}
            oauth={true}>
            <IoLogoGithub color='#666' size={18} />
          </Button>

          <Button
            onClick={() => signIn('google')}
            disable={isLoading}
            loading={isLoading}
            oauth={true}>
            <FaGoogle color='#666' size={18} />
          </Button>
        </div>

        <div className='w-full flex items-center justify-center gap-2'>
          <span className='text-zinc-500 text-sm'>
            {isLogin === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </span>

          <button type='button' onClick={() => toggleVariant()}>
            <span className='text-sm text-zinc-500 underline'>
              {isLogin === 'LOGIN' ? 'Create an account' : 'Login'}
            </span>
          </button>
        </div>
      </form>
    </section>
  )
}