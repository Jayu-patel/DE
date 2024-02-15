import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import MainLayout from './components/MainLayout'
import Lists from './components/Lists'
import { useDispatch, useSelector } from 'react-redux'
import useGeoLocation from './components/useGeoLocation'
import { useEffect } from 'react'
import { setLat, setLon } from './store/slices/locationSlice'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <HomePage/>},
        {path: '/lists', element: <Lists/>},
      ]
    }
  ])
  const latitude = useSelector(s => s?.location?.latitude)
  const longitude = useSelector(s => s?.location?.longitude)
  const dispatch = useDispatch()
  
  const location = useGeoLocation()

  useEffect(() => {
    if(latitude == ''){
      if (location.loaded) {
        if(location.coordinates.lat != ''){
          dispatch(setLat(location.coordinates.lat))
          dispatch(setLon(location.coordinates.lng))
        }
        else{
          dispatch(setLat('0'))
          dispatch(setLon('0'))
          alert('Reload the page')
        }
      }
    }
  }, [location.loaded,latitude,longitude]);

  useEffect(() => {
    console.log(latitude);
    console.log(longitude);
  }, [latitude,longitude]);
  return (
    <RouterProvider router={router} />
  )
}

export default App