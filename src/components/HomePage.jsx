import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGeoLocation from './useGeoLocation'
import { setLat, setLon } from '../store/slices/locationSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'


function HomePage() {
  const navigate = useNavigate()
  const latitude = useSelector(s => s?.location?.latitude)
  const nav=()=>{
    if(latitude != "") navigate('/lists')
    else{
      alert("Please allow location")
      window.location.reload()
    }
  }


  if(!latitude) return <div className='w-[100vw] h-[calc(100vh-60px)] grid place-items-center'><Loader/></div>
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
        <div className='img_box grid place-items-center'>
            <img src='hospital.jpg' alt="Error" />
            <div className='homeBox absolute text-white text-center mt-[-80px]'>
                <h1 className='text-[7rem] font-semibold'>
                  VBSS
                </h1>
                <p className='text-[1.5rem]'>The main purpose of this website is to provide the user with the nearest hospitals which have vacant beds</p>
                <button className='text-[1.2rem] 
                mt-[10px] 
                bg-white hover:bg-blue-500
                text-blue-500 hover:text-white
                px-5 py-3 rounded-lg
                transition-all
                '
                onClick={nav}
                >
                  Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default HomePage