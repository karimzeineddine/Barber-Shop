import React from 'react';
import AppointmentTime from './AppointmentTime';
import { Link } from 'react-router-dom';
import useStore from '../store/Store'; // Import Zustand store

function Appointment() {
  const times = useStore((state) => state.times); // Get times from the store

  return (
    <div className='flex flex-col items-center h-screen' style={{ backgroundImage: "url(/images/black.png)" }}>
      <div className='w-full'>
        <Link to="/">
          <h1 className='text-white text-5xl flex justify-end items-end w-full pr-10 pt-5'>X</h1>
        </Link>
      </div>
      <h1 className='text-6xl text-white pb-14'>Book Appointment</h1>
      <div className='grid grid-cols-3 gap-28 gap-x-40'>
        {times.map((time, index) => (
          <AppointmentTime
            key={index}
            time={time}
          />
        ))}
      </div>
    </div>
  );
}

export default Appointment;
