import { data } from 'autoprefixer';
import React from 'react'

function PlanetsInfo({data}) {
  return (
    <div className='pt-[7.875rem] main-container flex justify-between mb-[5.438rem]'>
      <div className='w-full max-w-[630px] flex items-center justify-center'>
        <img src={data[0].images.planet} alt={data[0].name + " Image"} width="290" height="290"/>
      </div>

      <div className='w-full max-w-[350px]'>
        <h1 className='mb-6'>mercury</h1>
        <p className='mb-6'>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
        <a className='flex items-center gap-1 opacity-50 mb-10' href="#">
          Source:
          <span className='flex items-center gap-2 font-bold underline'> 
              Wikipedia
              <img src="./assets/icon-source.svg" aria-hidden="true" width="12px" height="12px"/>
          </span>
        </a>

        <ul className='flex flex-col gap-4'>
          <li className='planets-info-item'>
            <span className='opacity-50'>01</span>
            OVERVIEW
          </li>
          <li className='planets-info-item'>
            <span className='opacity-50'>02</span>
            Internal Structure
          </li>
          <li className='planets-info-item'>
            <span className='opacity-50'>03</span>
            Surface Geology
          </li>
        </ul>


      </div>
    </div>
  )
}

export default PlanetsInfo
