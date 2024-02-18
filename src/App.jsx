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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <HomePage/>},
        {path: '/lists', element: <Lists/>},
        {path: '/hospital/:id', element: <HospitalPage/>}
      ]
    }
  ])
  const latitude = useSelector(s => s?.location?.latitude)
  const longitude = useSelector(s => s?.location?.longitude)
  const dispatch = useDispatch()
  
  const location = useGeoLocation()

  useEffect(() => {
    if(latitude == '' || latitude == '23.2556078' || latitude == 23.2556078){
      if (location.loaded) {
        if(location.coordinates.lat != ''){
          dispatch(setLat(location.coordinates.lat))
          dispatch(setLon(location.coordinates.lng))
        }
        else{
          dispatch(setLat('23.2556078'))
          dispatch(setLon('72.6592268'))
          if(latitude == 23.2556078 && longitude == 72.6592268){
            alert('Please reload page and allow Location')
          }
        }
      }
    }
  }, [location.loaded,latitude,longitude]);

  useEffect(() => {
  }, [latitude,longitude]);
  return (
    <RouterProvider router={router} />
  )
}

export default App