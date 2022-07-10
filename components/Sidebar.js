import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import SidebarLink from './SidebarLink'
import UserBox from './UserBox'
import {
  HomeIcon,
  HomeIconActive,
  ExploreIcon,
  ExploreIconActive,
  CommunitiesIcon,
  CommunitiesIconActive,
  NotificationIcon,
  NotificationIconActive,
  MessagesIcon,
  MessagesIconActive,
  BookmarksIcon,
  BookmarksIconActive,
  ProfileIcon,
  ProfileIconActive,
  MoreIcon,
  CreateTweetIcon,
} from './icons/Icon'

const sidebarLinks = [
  { name: 'Home', icon: HomeIcon, activeIcon: HomeIconActive },
  { name: 'Explore', icon: ExploreIcon, activeIcon: ExploreIconActive },
  {
    name: 'Communities',
    icon: CommunitiesIcon,
    activeIcon: CommunitiesIconActive,
  },
  {
    name: 'Notifications',
    icon: NotificationIcon,
    activeIcon: NotificationIconActive,
  },
  { name: 'Messages', icon: MessagesIcon, activeIcon: MessagesIconActive },
  { name: 'Bookmarks', icon: BookmarksIcon, activeIcon: BookmarksIconActive },
  { name: 'Profile', icon: ProfileIcon, activeIcon: ProfileIconActive },
  { name: 'More', icon: MoreIcon, activeIcon: MoreIcon },
]

function Sidebar() {
  const [active, setActive] = useState('Home')
  const handleMenuItemClick = (name) => {
    setActive(name)
  }
  return (
    <div className='text-white-base flex flex-col justify-between xxs:sm:px-3 xxs:xl:w-[275px] fixed bg-black min-h-screen'>
      <div className='flex flex-col items-center justify-center xl:items-start'>
        <div className='hidden xxs:sm:flex items-center justify-center w-14 h-14 hoverAnimation '>
          <Image src={logo} width={38} height={38} />
        </div>
        <nav>
          <ul className='flex items-center xl:items-start w-full max-w-[1265px] fixed bottom-0 bg-black justify-around xxs:sm:flex-col xxs:sm:static'>
            {sidebarLinks.slice(0, 5).map(({ name, icon, activeIcon }) => (
              <SidebarLink
                key={name}
                name={name}
                Icon={icon}
                ActiveIcon={activeIcon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
          <ul className='hidden xxs:sm:flex flex-col items-center xl:items-start '>
            {sidebarLinks.slice(6).map(({ name, icon, activeIcon }) => (
              <SidebarLink
                key={name}
                name={name}
                Icon={icon}
                ActiveIcon={activeIcon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className='drop-shadow-[0_0_3px_rgba(255,255,255,0.50)] fixed bottom-20 right-5 xxs:sm:filter-none xxs:sm:static flex gap-4 items-center justify-center font-bold text-lg rounded-full bg-blue-base hover:bg-blue-dark transition-colors duration-300 ease-out p-3 shadow-lg xxs:xl:w-[85%] xl:px-8 xl:py-3'>
          <CreateTweetIcon className='h-7 w-7 xxs:xl:hidden' />
          <span className='hidden xl:inline-flex'>Tweet</span>
        </button>
      </div>
      <UserBox />
    </div>
  )
}

export default Sidebar