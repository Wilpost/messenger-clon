'use client'

import { useEffect } from 'react'
import { AuthForm } from './Components/TemplateAuthForm'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user) {
      router.push('/conversations')
    }
  }, [router, session?.user])

  return (
    <>
      <AuthForm />
    </>
  )
}
