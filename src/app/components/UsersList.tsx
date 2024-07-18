import { getUsers } from '@/actions/getUsers'
import UserBox from './BoxItem'
import { getUserSession } from '@/actions/getSession'

export async function UsersList() {
  const session = await getUserSession()
  const users = await getUsers(session?.user?.email)

  return (
    <ul role='list'>
      {users.map(user => (
        <li key={user.id}>
          <UserBox image={user.image} name={user.name} email={user.email} />
        </li>
      ))}
    </ul>
  )
}
