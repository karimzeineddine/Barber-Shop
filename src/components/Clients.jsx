import React from 'react';
import useStore from '../store/Store'; // Import store
import { Link } from 'react-router-dom';

function Clients() {
  const clients = useStore((state) => state.clients);

  return (
    <>
     <div className='w-full'>
        <Link to="/">
          <h1 className='text-black text-5xl flex justify-end items-end w-full pr-10 pt-5'>X</h1>
        </Link>
      </div>
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">RESERVED APPOINTMENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold">Name: {client.name}</h3>
            <p className="text-gray-700">Phone: {client.phone}</p>
            <p className="text-gray-700">Service: {client.service}</p>
            <p className="text-gray-700">Time: {client.time}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  );
}

export default Clients;
