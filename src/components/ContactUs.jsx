import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault(); 

    const phoneNumber = '+96181604333'; // Phone number in international format without spaces or symbols
    const whatsappMessage = `Hello, my name is ${name}. ${message}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');

    // Clear the form fields after submission
    setName('');
    setMessage('');
  };

  return (
    <div id='contact' className="contact-us-section bg-gray-100 py-16 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have a question or want to book an appointment? Reach out to us below.
        </p>
      </div>

      {/* Contact Form and Contact Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={sendMessage}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#FBB034] text-white font-bold py-3 px-8 rounded hover:bg-[#ff8818] transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              <strong>Address:</strong> Boqaata Main Street
            </p>
            <p className="text-lg text-gray-600">
              <strong>Phone:</strong> +961 81 604333
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> info@barbershop.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Opening Hours:</strong> <br />
              Mon-Fri: 10:00 AM - 7:00 PM <br />
              Sat-Sun: 10:00 AM - 3:00 PM
            </p>
          </div>

          <div className="mt-8">
            {/* Google Maps Embed */}
            <iframe
              className="w-full h-64 rounded-lg"
              title="Google Maps"
              src="https://www.google.com/maps?q=MHCX+2R3,+Boqaata&output=embed"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
