import React from 'react';

function About() {
  return (
    <div id='about' className="about-us-section">
      

      {/* Our Story Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-6">About Us</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Founded in 2010, Sharp Cuts has grown from a small neighborhood shop to a staple in men’s grooming. Our team of barbers carries the rich tradition of barbering while keeping up with the latest styles and trends.
          </p>
          <p className="text-lg text-gray-600 text-center">
            Over the years, we’ve built a reputation for quality, precision, and a welcoming atmosphere that keeps our clients coming back. Whether it’s a fresh cut or a beard trim, we take pride in making every visit memorable.
          </p>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Our mission is simple: to provide high-quality grooming services in a welcoming and comfortable environment. We believe every client deserves personalized attention, and our goal is to help you look and feel your best.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <p className="text-lg text-gray-600">
              We value tradition, creativity, and customer satisfaction. At Sharp Cuts, we are committed to upholding the standards of classic barbering while embracing the evolution of modern styles.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <img 
                src="/images/barber-1.jpg" 
                alt="Barber 1" 
                className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
              <p className="text-gray-600">Master Barber</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="/images/barber-2.avif" 
                alt="Barber 2" 
                className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Senior Stylist</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img 
                src="/images/barber-3.jpg" 
                alt="Barber 3" 
                className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-gray-800">Mike Johnson</h4>
              <p className="text-gray-600">Beard Specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Cut?</h2>
        <p className="text-lg mb-6">Book your appointment today and let our team give you the sharp look you deserve!</p>
        <a href="/appointment" className="bg-[#FBB034] text-black font-bold py-3 px-8 rounded hover:bg-[#ff8818]">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default About;
