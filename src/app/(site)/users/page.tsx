import { UsersList } from '@/app/components/UsersList'

export default function UsersPage() {
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
        <UsersList />
      </section>
    </div>
  )
}
