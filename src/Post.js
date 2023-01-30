import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import { ShareOutlined,SendOutlined } from '@material-ui/icons'


function Post({ name, discription, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h1>{name}</h1>
                <p>{ discription}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" 
            color="gray"
            />
            <InputOption Icon={ChatOutlinedIcon} title="Like" 
            color="gray"
            />
            <InputOption Icon={ShareOutlined} title="Like" 
            color="gray"
            />
            <InputOption Icon={SendOutlined} title="Like" 
            color="gray"
            />

        </div>
    </div>
  )
}

export default Post