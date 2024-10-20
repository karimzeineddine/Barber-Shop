import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/Store'; // Import the store
import { Link } from 'react-router-dom';

function Reserve() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const addClient = useStore((state) => state.addClient);
  const navigate = useNavigate(); // To navigate back after reserve

  const handleReserve = () => {
    const reservedTime = useStore.getState().times.find(time => !time.available); // Find reserved time
    if (reservedTime) {
      // Add the client with reserved time
      addClient({ name, phone, service, time: `${reservedTime.first} to ${reservedTime.second}` });
      
      // Navigate back to the appointment page or confirmation page
      navigate('/');
    }
  };

  return (
    <div className='h-screen flex flex-col items-center' style={{ backgroundImage: "url(/images/black.png)" }}>
      <div className='w-full'>
      <Link to="/">
          <h1 className='text-white text-5xl flex justify-end items-end w-full pr-10 pt-5'>X</h1>
        </Link>
      </div>
      {/* Form layout */}
      <div className='w-[510px] flex flex-col justify-center items-center h-full'>
        <div className=' flex flex-col gap-10'>
          {/* Name input */}
          <div className='flex gap-5 text-white font-bold'>
            <h1 className='text-5xl pr-2'>Name:</h1>
            <input type='text' placeholder='Enter Your Name' className='w-80 pl-5 text-black' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          {/* Phone input */}
          <div className='flex gap-5 text-white font-bold'>
            <h1 className='text-5xl '>Phone:</h1>
            <input type='text' placeholder='Enter Your Phone Number' className='w-80 pl-5 text-black' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          {/* Service input */}
          <div className='flex gap-5 text-white font-bold'>
            <h1 className='text-5xl '>Service:</h1>
            <select className='w-72 pl-5 text-black' value={service} onChange={(e) => setService(e.target.value)}>
              <option value="Select Service">Select Service</option>
              <option value="Kids Haircut">KID HAIRCUT</option>
              <option value="Adult Haircut">ADULT HAIRCUT</option>
              <option value="Beard Trim">BEARD TRIM</option>
              <option value="Neck Shave">NECK SHAVE</option>
              <option value="Scalp Moisturizing">SCALP MOISTURIZING</option>
              <option value="Beard Grooming">BEARD GROOMING</option>
            </select>
          </div>
        </div>

        {/* Reserve button */}
        <div className='w-full flex justify-end items-end pt-10'>
          <button className=' w-44 h-14 bg-[#FBB034] text-black font-bold hover:bg-[#ff8818] text-2xl' onClick={handleReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
