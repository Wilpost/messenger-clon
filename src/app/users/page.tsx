import UserBox from '@/components/UserBox'
import { User } from '@prisma/client'

interface UsersPageProps {
  users: User[]
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div className='w-full h-full flex flex-col'>
      {users.map(user => {
        return <UserBox image={user.image} name={user.name} key={user.email} />
      })}
    </div>
  )
}
