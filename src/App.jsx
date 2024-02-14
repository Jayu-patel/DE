import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import MainLayout from './components/MainLayout'
import Lists from './components/Lists'

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
  return (
    <RouterProvider router={router} />
  )
}

export default App