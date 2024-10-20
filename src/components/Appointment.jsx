import React from 'react'
import AppointmentTime from './AppointmentTime'
import { Link } from 'react-router-dom'

function Appointment() {
    const data = [
        {
            first: "10:00",
            second: "11:00",
            available: false
        },
        {
            first: "11:00",
            second: "12:00",
            available: true 
        },
        {
            first: "12:00",
            second: "1:00",
            available: true 
        },
        {
            first: "1:00",
            second: "2:00",
            available: true 
        },
        {
            first: "2:00",
            second: "3:00",
            available: false
        },
        {
            first: "3:00",
            second: "4:00",
            available: true 
        },
        {
            first: "4:00",
            second: "5:00",
            available: true 
        },
        {
            first: "5:00",
            second: "6:00"
        },
        {
            first: "6:00",
            second: "7:00",
            available: true 
        }
    ]
    return (
        <div className='flex flex-col  items-center   h-screen' style={{ backgroundImage: "url(/images/black.png)" }}>
            <div className='w-full'>
            <Link to="/">
            <h1 className='text-white text-5xl flex justify-end items-end w-full pr-10 pt-5'>X</h1>
            </Link>
            </div>
            <h1 className='text-6xl text-white pb-14'>Book Appointment</h1>
            <div className='grid grid-cols-3 gap-28 gap-x-40'>
                {data.map((time, index) => (
                    <AppointmentTime
                        key={time.id || index}
                        time={time}
                    />
                ))}
            </div>
        </div>
    )
}

export default Appointment