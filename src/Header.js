import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
    <div className='header__left'>
        <img src='../in.png' alt=''/>
        <div className='header__search'>
            <SearchIcon />
            <input type='text'/>
        </div>
      
    </div>

    <div className='header__right'>
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/D4D35AQGDCvOctDBPZQ/profile-framedphoto-shrink_100_100/0/1664270161741?e=1665349200&v=beta&t=DSqsdrobRlfN6M6HGEYWS2dCXva7h22GsOuNS6u8eJA" title='me'/>
    </div>
    </div>
  )
}

export default Header