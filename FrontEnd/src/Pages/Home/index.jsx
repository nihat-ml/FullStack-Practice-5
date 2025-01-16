import React from 'react'
import Features from '../Features'
import Hero from '../../Components/Hero'
import {Helmet} from "react-helmet"

function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Hero/>
     <Features/> 
    </>
  )
}

export default Home
