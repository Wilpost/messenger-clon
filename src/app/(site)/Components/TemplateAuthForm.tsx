'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { AuthInput } from '@/app/(site)/Components/Inputs/AuthInput'
import { Button } from '../../components/buttons/Button'
import { useSession } from 'next-auth/react'
import { useDataForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'
import CircularIndeterminate from '@/app/components/loaders/CircularIndeterminate'

type Variant = 'LOGIN' | 'REGISTER'

export function AuthForm() {
  const router = useRouter()
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState({
    auth: false,
    github: false,
    google: false
  })

  const [isLogin, setIsLogin] = useState<Variant>('LOGIN')

  const { onSubmit, register, handleSubmit, socialAction } = useDataForm(
    setIsLoading,
    isLoading
  )

  useEffect(() => {
    if (session?.user) {
      router.push('/conversations')
    }
  }, [router, session?.user])

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
          src='/Hero_Logo.svg'
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
          bg-primary
        `}>
        {isLogin === 'REGISTER' && (
          <AuthInput
            placeholder='username'
            register={register}
            id='username'
            type='username'
            label='username'
            name='username'
            disable={isLoading.auth}
          />
        )}

        <AuthInput
          placeholder='example@example.com'
          register={register}
          id='email'
          type='email'
          label='Email address'
          name='email'
          disable={isLoading.auth}
        />

        <AuthInput
          placeholder='******'
          register={register}
          id='password'
          type='password'
          label='Password'
          name='password'
          disable={isLoading.auth}
        />

        {isLogin === 'LOGIN' && (
          <Button
            type='submit'
            credentials={true}
            disable={isLoading.auth}
            loading={isLoading.auth}>
            {isLoading.auth ? (
              <CircularIndeterminate color='white' />
            ) : (
              'Sign in'
            )}
          </Button>
        )}

        {isLogin === 'REGISTER' && (
          <Button
            type='submit'
            credentials={true}
            disable={isLoading.auth}
            loading={isLoading.auth}>
            {isLoading.auth ? <CircularIndeterminate /> : 'Sign Up'}
          </Button>
        )}

        <div className='w-full mt-6 relative h-[1px] bg-zinc-500'>
          <span className='absolute -top-[10px] px-2 text-sm left-[35%] bg-primary text-zinc-500'>
            Or continue with
          </span>
        </div>

        <div className='w-full flex gap-2 items-center'>
          <Button
            onClick={() => {
              socialAction('github')
              router.push('/conversations')
            }}
            disable={isLoading.github}
            loading={isLoading.github}
            oauth={true}>
            {isLoading.github && <CircularIndeterminate />}
            {!isLoading.github && (
              <IoLogoGithub className='text-zinc-300' size={18} />
            )}
          </Button>

          <Button
            onClick={() => socialAction('google')}
            disable={isLoading.google}
            loading={isLoading.google}
            oauth={true}>
            {isLoading.google && <CircularIndeterminate />}
            {!isLoading.google && (
              <FaGoogle className='text-zinc-300' size={18} />
            )}
          </Button>
        </div>

        <div className='w-full flex items-center justify-center gap-2'>
          <span className='text-zinc-400 text-sm'>
            {isLogin === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </span>

          <button type='button' onClick={() => toggleVariant()}>
            <span className='text-sm text-zinc-300 underline'>
              {isLogin === 'LOGIN' ? 'Create an account' : 'Login'}
            </span>
          </button>
        </div>
      </form>
    </section>
  )
}
