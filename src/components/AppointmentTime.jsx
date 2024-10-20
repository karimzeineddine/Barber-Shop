import React from 'react'
import { Link } from 'react-router-dom'

function AppointmentTime({ time }) {
  const isAvailable = time.available !== false; 

  return (
    <div>
      {isAvailable ? (
        <Link to="/reserve">
          <button
            className='w-36 h-11 bg-[#FBB034] text-black font-bold hover:bg-[#ff8818]'
          >
            {time.first} to {time.second}
          </button>
        </Link>
      ) : (
        <button
          className='w-36 h-11 bg-gray-400 text-black font-bold line-through cursor-not-allowed'
          disabled
        >
          {time.first} to {time.second}
        </button>
      )}
    </div>
  )
}

export default AppointmentTime
