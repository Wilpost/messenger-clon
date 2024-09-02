'use client'

import { Avatar } from './Avatar'
import { FaPhone } from 'react-icons/fa6'
import { PiVideoCameraFill } from 'react-icons/pi'
import { SlOptions } from 'react-icons/sl'
import { IoIosArrowBack } from 'react-icons/io'

interface ChatViewProps {
  name?: string | null
  image?: string | null
}

const HeaderConversation: React.FC<ChatViewProps> = ({ name, image }) => {
  const runBackPage = () => {
    window.history.back()
  }

  return (
    <nav
      className='
            sticky
            top-0
            w-full
            h-auto
            flex
            justify-between
            p-2
            items-center
            shadow-md
        '>
      <ul
        className='
          w-full
          flex
          items-center
          gap-1
        '>
        <li
          className='
            block
            md:hidden
          hover:bg-secondary
            active:bg-opacity-65
            rounded-full
            cursor-pointer
          '>
          <button
            className='rounded-full p-2'
            aria-label='Button de regreso a la pagina anterior'
            onClick={runBackPage}>
            <IoIosArrowBack
              size={24}
              className='
              text-contrastColor
            '
            />
          </button>
        </li>

        <li
          className='
            w-full
            flex
            items-center
            justify-start
            pl-2
            gap-2
          '>
          <Avatar src={image} medium />
          <span className='w-full font-semibold'>{name}</span>
        </li>
      </ul>

      <ul
        className='
            flex
            items-center
            gap-3
            p-2
        '>
        <li
          className='
            cursor-pointer
            p-2
            rounded-full
          hover:bg-secondary
            active:bg-opacity-65
          '>
          <FaPhone
            size={19}
            className='
                text-contrastColor
            '
          />
        </li>

        <li
          className='
              cursor-pointer
              p-2
              rounded-full
            hover:bg-secondary
              active:bg-opacity-65
          '>
          <PiVideoCameraFill
            size={19}
            className='
                text-contrastColor
            '
          />
        </li>

        <li
          className='
            cursor-pointer
            p-2
            rounded-full
          hover:bg-secondary
            active:bg-opacity-65
          '>
          <SlOptions
            size={19}
            className='
            text-contrastColor
            '
          />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderConversation
