import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'

export function useDataForm(setIsLoading: Dispatch<SetStateAction<boolean>>) {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const socialAction = async (action: string) => {
    setIsLoading(true)

    signIn(action, {
      redirect: false
    })
      .then(res => {
        if (res?.error) {
          toast.error(res.error)
        }

        if (res?.ok) {
          router.push('/conversations')
          toast.success('User logged In!')
        }
      })
      .finally(() => setIsLoading(false))
  }

  const onSubmit = async (variant: string, values: FieldValues) => {
    if (variant === 'LOGIN') {
      const { email, password } = values

      setIsLoading(true)
      signIn('credentials', {
        redirect: false,
        email,
        password
      })
        .then(res => {
          if (res?.error) {
            toast.error(res.error)
          }

          if (res?.ok) {
            router.push('/conversations')
            toast.success('User logged In!')
          }
        })
        .finally(() => setIsLoading(false))
    }

    if (variant === 'REGISTER') {
      const { email, password, username } = values

      await axios
        .post(
          '/auth/register',
          JSON.stringify({
            email,
            password,
            username
          })
        )
        .then(res => {
          if (res.status !== 200) {
            toast.error('Something went wrong!')
            return
          }
          const { email, password } = JSON.parse(res.data)

          toast.success('User register succesfully')
          signIn('credentials', { email, password })
          router.push('/conversations')
        })
        .finally(() => setIsLoading(false))
    }
  }

  return { onSubmit, register, handleSubmit, socialAction }
}
