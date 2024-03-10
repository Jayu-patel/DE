import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { setLat, setLon } from './store/slices/locationSlice'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from './components/tools/MainLayout'
import HomePage from './components/hospital/HomePage'
import HospitalPage from './components/hospital/HospitalPage'
import Lists from './components/hospital/Lists'
import NotFound from './components/tools/NotFound'
import HomePage2 from './components/hospital/HomePage2'
import Patient from './components/hospital/Patient'
import Username from './components/auth/Username'
import Recovery from './components/auth/Recovery'
import Password from './components/auth/Password'
import Reset from './components/auth/Reset'
import Profile from './components/auth/Profile'
import Register from './components/auth/Register'
import useGeoLocation from './components/hospital/useGeoLocation'
import { Authorization, UserProtect} from './middleware/auth'
import LoadLocation from './components/hospital/LoadLocation'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <HomePage2/>},
        {path: '/lists', element: <Lists/>},
        {path: '/hospital/:id', element: <HospitalPage/>},
        {path: '/patient', element: <Patient/>},
        {path: '/load', element: <LoadLocation/>},

        { path : '/username', element : <Username/> },
        { path : '/register', element :   <Register/>},
        { path : '/password', element : <UserProtect><Password/></UserProtect>},
        { path : '/recovery', element : <Recovery/> },
        { path : '/reset', element : <Reset/> },
        { path : '/profile', element : <Authorization><Profile/></Authorization> },
        {path: '*', element: <NotFound/>}
      ]
    }
  ])
  const latitude = useSelector(s => s?.location?.latitude)
  const longitude = useSelector(s => s?.location?.longitude)

  return (
    <RouterProvider router={router} />
  )
}

export default App