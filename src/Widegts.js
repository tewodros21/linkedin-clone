import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widegts.css'

function Widegts() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                < FiberManualRecord />
            </div>

                <div className='widgets__articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <Info />
        </div>
        {newsArticle("Tewodros is back", "Top news- 9099 readers")}
        {newsArticle("Coronavirus: Ethiopia update", "Top news- 959 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 959 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 959 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Code - 9509 readers")}
        {newsArticle("Teddy react lunches projects?!", "Top news - 9989 readers")}
        {newsArticle("Teddy react lunches projects?!", "Top news - 9989 readers")}



    </div>
  )
}

export default Widegts