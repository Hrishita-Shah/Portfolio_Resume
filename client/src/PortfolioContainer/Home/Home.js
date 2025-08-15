import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
    </div>
  )
}
