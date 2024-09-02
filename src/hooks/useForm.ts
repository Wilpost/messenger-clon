import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { StateLoadingProps } from '@/types'

export function useDataForm(
  setIsLoading: Dispatch<SetStateAction<StateLoadingProps>>,
  loading: StateLoadingProps
) {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const socialAction = (action: string) => {
    setIsLoading({
      ...loading,
      [action]: true
    })

    signIn(action)
      .then(res => {
        if (res?.error) {
          toast.error(res.error)
        }

        if (!res?.error) {
          toast.success('User logged In!')

          router.push('/conversations')
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading({
          auth: false,
          github: false,
          google: false
        })
      })
  }

  const onSubmit = async (variant: string, values: FieldValues) => {
    if (variant === 'LOGIN') {
      const { email, password } = values

      setIsLoading({
        ...loading,
        auth: true
      })
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
        .finally(() =>
          setIsLoading({
            auth: false,
            github: false,
            google: false
          })
        )
    }

    if (variant === 'REGISTER') {
      const { email, password, username } = values
      setIsLoading({
        ...loading,
        auth: true
      })

      await axios
        .post(
          '/auth/register',
          JSON.stringify({
            email,
            password,
            username
          })
        )
        .then(async res => {
          if (res.status !== 200) {
            toast.error('Something went wrong!')
            return
          }
          const { email, password } = JSON.parse(res.data)

          toast.success('User register succesfully')
          await signIn('credentials', { email, password })
          router.push('/conversations')
        })
        .finally(() =>
          setIsLoading({
            auth: false,
            github: false,
            google: false
          })
        )
    }
  }

  return { onSubmit, register, handleSubmit, socialAction }
}
