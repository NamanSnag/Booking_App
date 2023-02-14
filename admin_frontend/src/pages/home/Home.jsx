import React from 'react'

import { Navbar, Header } from '../../components'

import './style.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className='homeContainer'>
      </div>
    </div>
  )
}

export default Home
