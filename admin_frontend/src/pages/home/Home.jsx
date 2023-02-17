import React from 'react'

import { Navbar, Header, Featured, PropertyList, FeaturedProperties, MailList, Footer } from '../../components'

import './style.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <h1 className='homeTitle'># Browse by property type</h1>
        <PropertyList/>
        <hr/>
        <Featured/>
        <hr/>
        <h1 className="homeTitle"># Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
