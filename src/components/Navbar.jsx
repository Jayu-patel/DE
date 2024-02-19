import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [menu, setMenu] = useState("xs:translate-x-[300px]")
    const [overflow, setO] = useState('xs:overflow-hidden')

    const fun=()=>{
        menu == "xs:translate-x-[300px]" ? setMenu("xs:translate-x-[0px]") : setMenu("xs:translate-x-[300px]");
        overflow == 'xs:overflow-hidden' ? setO('') : setO('xs:overflow-hidden')
    }

    const navigate = useNavigate()
    return (
    <div className={'w-[100vw] h-auto bg-blue-600 text-white flex justify-between sticky top-0 z-50 shadow-md '+overflow}>
        <div className='ml-8 xss:ml-2 xs:ml-1'>
            <h1 className='text-[2.5rem] font-semibold cursor-pointer' onClick={()=>{navigate('/')}}>VBSS</h1>
        </div>
        <div className={'mr-8 overflow-hidden w-[25%] list-none my-auto transition-all text-[1.2rem] [&_li]:cursor-pointer xss:w-[40%] xs:shadow-2xl xs:w-auto xs:mr-0 box '+menu}>
            <div className='flex justify-between box2'>
                <li>Profile</li>
                <li>Settings</li>
                <li>Log out</li>
            </div>
        </div>
        <div className='hidden xs:block my-auto mr-4 text-[2rem]'>
            <button onClick={fun}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
    )
}

export default Navbar