import React from 'react'
import MetaData from './MetaData'

// components
import NavBar from '../navBar/NavBar'

const Home = () => {
  return (
    <>
      <MetaData title={'Home'} />
      <div>
        <NavBar />

      </div>
    </>
  )
}

export default Home