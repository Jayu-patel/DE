import data  from '../data/data'
import React from 'react'
import { useParams } from 'react-router-dom'


function HospitalPage() {
    const param = useParams()
    const {id} = param
    const hospital = data[id-1]
    const info1 = `M Cure Hospital listed under Hospitals in Sargasan, Gandhinagar-gujarat. Check Visiting Time, Fees, Address, Contact Number, Ratings & Reviews, Photos, Maps etc, on Justdial.`
    const info2 = `Healthcare is something that can't be compromised, can it? Hospitals have a huge role to play in developing the healthcare system of any country because, with a growing population, the healthcare demands too are growing and evolving. Providing the highest standard of care for both, minor and major health issues, hospitals create a safe space for the patients by offering end-to-end clinical, surgical, and diagnostic services. Hospitals have been making healthcare accessible to one and all and M Cure Hospital in Sargasan, Gandhinagar-gujarat is one such reliable hospital that is committed to providing expert medical care. Having established a firm presence as a trusted name in Hospitals, it is renowned for offering specialised services and treatments like Diabetology, Thyroid Treatment, Complicated Diabetes, Treatment For Obstetrics Problems, etc.`
    const overview = `Established in the year 2015, RADHE MULTISPECIALITY HOSPITAL in Kudasan, Gandhinagar-gujarat is a top player in the category Hospitals in the Gandhinagar-gujarat. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Gandhinagar-gujarat. Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Gandhinagar-gujarat, this establishment occupies a prominent location in Kudasan. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at RELIANCE CROSS ROAD TO KUDASAN GAM, Opp. KANAM PARTY PLOT, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Hospitals, Private Hospitals, Multispeciality Hospitals, 24 Hours ICU.`
    const services = `RADHE MULTISPECIALITY HOSPITAL in Kudasan has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. Pay for the product or service with ease by using any of the available modes of payment, such as Cash, Debit Cards, Credit Card, Visa Card, Master Card. This establishment is functional from 00:00 - 23:59.`
    return (
    <div className='w-[100vw] h-auto pt-[60px] bg-gray-200'>
        <div className='r w-[75%] mx-auto bg-white xs:w-[100%] shadow-xl'>
            <div className='p-5 xs:p-3'>
                <div className='b'>
                    <h1>{hospital.title}</h1>
                    <p>                        {
                            hospital.ratings >= 4 ? 
                            <span className='text-green-600'>{hospital.ratings}</span> : 
                            <span className='text-yellow-500'>{hospital.ratings}</span>
                        }
                        <span className='text-yellow-500 pr-2'>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        Ratings
                    </p>
                    <h2><i className="fa-solid fa-location-dot"></i> {hospital.address}</h2>
                </div>

                <div className='b'>
                    <h1>Address</h1>
                    <p>{hospital.fullAdd}</p>
                </div>

                <div className='b b2'>
                    <h1 className='text'>About us</h1>
                    <h1>{hospital.title}</h1>
                    <p>{info1}</p>
                    <p>{info2}</p>
                    <h1>Location and Overview</h1>
                    <p>{overview}</p>
                    <h1>Product and Services offered</h1>
                    <p>{services}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HospitalPage