import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-4">Contact Us</h2>
            <p>Ramdebaba University</p>
            <p>Nagpur, Maharastra</p>
            <p>PIN: 440013</p>
            <p>Email: <a href="mailto:ecell@iitbhu.ac.in" className="underline hover:text-orange-500">abc@xyz.com</a></p>
            <p>Phone: +91 9120787959</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-4">Important Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Events</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Initiatives</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Gallery</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            </ul>
          </div>
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-4">Important Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Events</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Initiatives</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Gallery</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-xl mb-4">Newsletter</h2>
            <form>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Type your email..." 
                  className="w-full px-4 py-2 text-gray-800"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 transition duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-black hover:text-white transition duration-300"><FaLinkedin /></a>
            <a href="#" className="text-black hover:text-white transition duration-300"><FaInstagram /></a>
            <a href="#" className="text-black hover:text-white transition duration-300"><FaFacebook /></a>
            <a href="#" className="text-black hover:text-white transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-black hover:text-white transition duration-300"><FaYoutube /></a>
            <a href="#" className="text-black hover:text-white transition duration-300"><FaDiscord /></a>
          </div>
          <p className="text-center text-gray-400 mt-4">© 2024 TBI RBU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

