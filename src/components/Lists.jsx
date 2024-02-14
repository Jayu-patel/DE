import React from 'react'
import data from '../data/data'

function Lists() {
    return (
    <div className='w-[100vw] py-5 bg-gray-200'>
        <div className='grid grid-cols-auto-fill-600 gap-7 w-[75%] xs:w-[85%] mx-auto xs:grid-cols-auto-fill-601'>
            {
                data.map(e=>{
                    return <div key={e.id} className='border-black border-[1px] px-4 py-6 pb-16 bg-white shadow-lg bg-no-repeat bg-cover' 
                        style={{backgroundImage : "url('bg.jpg')"}}>
                        <h1 className='text-[1.3rem] text-blue-500 font-semibold'>{e.title}</h1>
                        <div className='flex'>
                            <span>
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <span className='ml-1'>
                                <p className='text-gray-500'>{e.address}</p>
                            </span>
                        </div>
                        <div className='bed p-1 w-[30%] mt-1 rounded-lg bg-blue-400 text-white grid place-items-center'>
                            <h3>No. of beds: {e.bed}</h3>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
    )
}

export default Lists
