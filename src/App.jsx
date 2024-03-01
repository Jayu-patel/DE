import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import MainLayout from './components/MainLayout'
import Lists from './components/Lists'
import { useDispatch, useSelector } from 'react-redux'
import useGeoLocation from './components/useGeoLocation'
import { useEffect } from 'react'
import { setLat, setLon } from './store/slices/locationSlice'
import HospitalPage from './components/HospitalPage'
import NotFound from './components/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <HomePage/>},
        {path: '/lists', element: <Lists/>},
        {path: '/hospital/:id', element: <HospitalPage/>},
        {path: '*', element: <NotFound/>}
      ]
    }
  ])
  const latitude = useSelector(s => s?.location?.latitude)
  const longitude = useSelector(s => s?.location?.longitude)
  const dispatch = useDispatch()
  
  const location = useGeoLocation()

  useEffect(() => {
    if(latitude == ''){
      if (location.loaded && location.coordinates.lat != '') {
          dispatch(setLat(location.coordinates.lat))
          dispatch(setLon(location.coordinates.lng))
      }
    }
  }, [location.loaded,latitude,longitude]);

  useEffect(() => {
  }, [latitude,longitude]);

  setInterval(()=>{
    if(location.error != null){
      alert('Please reload the page & allow location')
      window.location.reload(true)
    }
  },8000)
  return (
    <RouterProvider router={router} />
  )
}

export default App