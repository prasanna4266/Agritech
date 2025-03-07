import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Agri-Tech</h1>
          <nav>
            <a href="#features" className="px-2 text-lg hover:text-green-200">Features</a>
            <a href="#services" className="px-2 text-lg hover:text-green-200">Services</a>
            <a href="#testimonials" className="px-2 text-lg hover:text-green-200">Testimonials</a>
            <a href="#contact" className="px-2 text-lg hover:text-green-200">Contact</a>
            <Link to='/ulogin' className="px-2 text-lg hover:text-green-200">Login</Link>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section 
  className="bg-green-100 text-green-900 bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-center"
  style={{ backgroundImage: "url('https://www.icl-group.com/wp-content/uploads/2024/07/shutterstock_2450410213-1.jpg')" }}
>
  <div className="container mx-auto px-6 text-white p-8 rounded-lg">
    <h2 className="text-5xl font-bold mb-4">Innovative Agriculture Solutions</h2>
    <p className="text-xl mb-8">Empowering farmers with cutting-edge technology to enhance productivity and sustainability.</p>
    <button 
      onClick={() => navigate('/ulogin')} 
      className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition duration-300"
    >
      Get Started
    </button>
  </div>
</section>


      {/* Features */}
      <section id="features" className="py-20 bg-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://www.cabi.org/wp-content/uploads/International-development/Centres/ICM-Diagram-FINAL.jpg" alt="Crop Management" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Crop Management</h3>
              <p>Real-time monitoring of crop health to detect diseases and pests early.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://khetibuddy.com/wp-content/uploads/2023/02/Kheti-Buddy_Infographic_updated-1-1.webp" alt="Farm Management" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Farm Management</h3>
              <p>Real-time Farm Management where user can access complete farm management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://theagrotechdaily.com/wp-content/uploads/2023/02/3-1.png" alt="Smart Irrigation" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Smart Irrigation</h3>
              <p>Efficient water management systems that save water and improve crop yields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-green-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://tgts.telangana.gov.in/images/causes/consultancy%20picture.jpg" alt="Consultancy" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Consultancy</h3>
              <p>Expert advice on modern farming techniques and practices to enhance productivity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://www.sathvikcivilengineers.com/blog/wp-content/uploads/2024/01/Things-You-Need-To-Know-About-Types-Of-Soil-Testing-1.jpg" alt="Soil Testing" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h2 className="text-3xl font-bold mb-8">Soil Testing</h2>
              <p>Comprehensive soil analysis to recommend the best crops and fertilizers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://media.licdn.com/dms/image/v2/D5612AQGVc2TPNM_gIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1667837236724?e=2147483647&v=beta&t=LnwQHAxKcf17dsRXKzuUnvpt3v4xI6sChgw6-pk-bmU" alt="Market Access" className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Market Access</h3>
              <p>Connecting farmers to buyers and markets to sell their produce at fair prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">"AgriTech's solutions have transformed our farming operations. We're seeing higher yields and better efficiency."</p>
              <h4 className="text-xl font-bold mt-4">- John Doe</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">"The precision farming tools provided by AgriTech are top-notch. We can now manage our fields more effectively."</p>
              <h4 className="text-xl font-bold mt-4">- Jane Smith</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">"Smart irrigation has saved us a lot of water while ensuring our crops get the necessary hydration."</p>
              <h4 className="text-xl font-bold mt-4">- Alice Johnson</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">"The market access services helped us find buyers quickly and get better prices for our produce."</p>
              <h4 className="text-xl font-bold mt-4">- Robert Brown</h4>
            </div>
          </div>
        </div>
      </section>
{/* 
      // Contact Form 
      <section id="contact" className="bg-green-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <form className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition duration-300" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AgriTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
