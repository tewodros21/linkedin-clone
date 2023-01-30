import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://media-exp1.licdn.com/dms/image/C4E16AQGEwAWxC2ttKA/profile-displaybackgroundimage-shrink_200_800/0/1646778685372?e=1670457600&v=beta&t=bsxbVwVVT52TUEVnFNyhrqjkXclLYZXP3I0VeUrXIX8" title='me'/>
            <Avatar className='sidebar_avater'/>
            <h2>Tewodos Awoke</h2>
            <h4>Tewodros@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
           <div className='sidebar_stat'>
           <p>who viewed you</p>
           <p className='sidebar__statNumber'>2000</p>
           </div>
           <div className='sidebar_stat'>
           <p>who viewed you</p>
           <p className='sidebar__statNumber'>2000</p>
          
           </div>
        </div>

        <div className='sidebar__button'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programing')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>

    </div>
  )
}

export default Sidebar
