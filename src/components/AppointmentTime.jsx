import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/Store'; // Import the store

function AppointmentTime({ time }) {
  const reserveTime = useStore((state) => state.reserveTime);

  const handleReserve = () => {
    reserveTime(time); // Mark this time as reserved
  };

  return (
    <div>
      {time.available ? (
        <Link to="/reserve">
          <button
            onClick={handleReserve}
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
  );
}

export default AppointmentTime;
