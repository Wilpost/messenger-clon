'use client'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { ChatInput } from '../(site)/Components/Inputs/ChatInput'
import axios from 'axios'
export const FooterSubmit = ({
  conversationId
}: {
  conversationId: string
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      messages: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    try {
      const sendMsg = await axios.post(
        '/api/messages',
        JSON.stringify({
          message: values?.bodyMessage,
          image: null,
          conversationId: conversationId
        })
      )

      console.log('values: ', values)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer
      className='
        w-full
        flex
        items-center
        gap-1
        '>
      <form
        className='
        w-full
        flex
        gap-2
        items-center
      '
        onSubmit={handleSubmit(onSubmit)}>
        <ChatInput register={register} />
      </form>
    </footer>
  )
}
