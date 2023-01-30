import React, {  } from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image" 
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon  from '@material-ui/icons/EventNote'
import CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay'
import Post from './Post'



function Feed() {
   

  return (
    <div className='feed'>
        <div className='feed__inputcon'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                  <input type="text"/>
                  <button type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inpuopt'>
                <InputOption Icon={ImageIcon} title="Photo"
                color="#7005F9"
                />
                <InputOption Icon={SubscriptionsIcon} title="Video"
                color="#E7A33E"
                />
                <InputOption Icon={EventNoteIcon} title="Event"
                color="#C0CBCD"
                />
                <InputOption Icon={CalendarViewDayIcon} title="Write article"
                color="#7FC15E"
                />

            </div>
        </div>
            <Post 
            
            name= 'Tewodros Awoke'
            discription='Hello! my name is Tewodros Awoke'
            
            />

             <Post 
            
            name= 'Tewodros Awoke'
            discription='i like coding!'
            
            />

           <Post 
            
            name= 'Tewodros Awoke'
            discription='even if my code is not working i run it again'
            
            />

           <Post 
            
            name= 'Tewodros Awoke'
            discription='even if my code is not working i run it again'
            
            />
            <Post 
            
            name= 'Tewodros Awoke'
            discription='even if my code is not working i run it again'
            
            />
            <Post 
            
            name= 'Tewodros Awoke'
            discription='even if my code is not working i run it again'
            
            />
        
    </div>
  )
}

export default Feed