import prisma from '@/lib/prisma_db'

function getMessage(id: string | undefined) {
  const messages = prisma.message.findUnique({
    where: {
      id
    },
    include: {
      seen: true,
      convertations: true
    }
  })

  return messages
}

export default getMessage
