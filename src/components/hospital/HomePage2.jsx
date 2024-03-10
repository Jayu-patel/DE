import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../tools/Loader'


function HomePage2() {
  const navigate = useNavigate()
  const latitude = useSelector(s => s?.location?.latitude)
  const nav=()=>{
    if(latitude != "") navigate('/lists')
    else{
      alert("Please allow location")
      window.location.reload()
    }
  }


  // if(!latitude) return <div className='w-[100vw] h-[calc(100vh-60px)] grid place-items-center'><Loader/></div>
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
        <div className='img_box grid place-items-center'>
            <img src='hospital.jpg' alt="Error" />
            <div className='homeBox absolute text-white text-center mt-[-80px]'>
                <h1 className='text-[7rem] font-semibold'>
                  VBSS
                </h1>
                <div className='btns mt-[8px]'>
                    <button className='mr-[12px]'>Hospital</button>
                    <button onClick={()=>{navigate('/patient')}}>Patient</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage2