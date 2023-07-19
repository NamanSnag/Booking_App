
import { useSelector } from 'react-redux'
import { Explore, Header, PropertTypes } from '../../components/index'


import './style.scss'

const Home = () => {

  // const user = useSelector(state=> state.user)

  return (
    <div className='home'>
      <Header/>
      <div className='homeContainer'>
        <h1 className='homeTitle'># Browse By Property Type</h1>
        <PropertTypes/>
        <hr/>
        <h1 className="homeTitle"># Explore India</h1>
        <Explore/>
        <hr/>
        <h1 className="homeTitle"># User Reviews</h1>
      </div>
    </div>
  )
}

export default Home