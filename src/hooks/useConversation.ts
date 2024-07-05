'use client'

import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export function useConversation() {
  const params = useParams()

  const converstationId = useMemo(() => {
    if (!params?.converstationId) {
      return ''
    }

    return params?.converstationId as string
  }, [params?.converstationId])

  const isOpen = useMemo(() => !!converstationId, [converstationId])

  return useMemo(
    () => ({
      converstationId,
      isOpen
    }),
    [converstationId, isOpen]
  )
}
