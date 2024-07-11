import { getUsers } from '@/actions/getUsers'
import UserBox from '@/components/UserBox'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div
      className='
      w-full
      overflow-x-auto 
      h-full
      md:flex 
      flex-col 
      gap-1
    '>
      <div
        className='
          w-full
          flex
          items-center
          justify-start
          pl-5
          pt-3
        '>
        <h1 className='text-2xl font-bold text-textSecondary'>People</h1>
      </div>

      <section
        className='
          w-full
          h-full
          p-3
          flex
          flex-col
        '>
        {users.map(user => {
          return (
            <UserBox
              image={user.image}
              name={user.name}
              key={user.id}
              id={user.id}
            />
          )
        })}
      </section>
    </div>
  )
}
