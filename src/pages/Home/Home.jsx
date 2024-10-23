import React from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import PlanetsInfo from '../../layouts/PlanetsInfo/PlanetsInfo'
import { useState } from 'react'

function Home() {

  const[activePlanet, setActivePlanet] = useState("mercury")

  const {data, isPanding, error} = useFetch()

  if(isPanding) {
    return <h1 className='text-5xl text-white font-bold'>Loading...</h1>
  }

  return (
    <>
      <Navbar setActivePlanet={setActivePlanet}/>
      {data && <PlanetsInfo data={data}/>}
    </>
  )
}

export default Home
