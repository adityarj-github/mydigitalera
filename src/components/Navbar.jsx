import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = ({ onOpenPopup }) => {
  return (
    <section className='navbar sticky top-4 z-50'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }} // <-- Changed from whileInView to animate
        transition={{ duration: 1.5 }}
        className='mx-auto w-full flex items-center justify-between border border-gray-600 mt-5 p-2 rounded-lg bg-transparent md:max-w-3xl bg-[#121212]/40 backdrop-blur-md'
      >
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              className='w-10 rounded-[50%] object-contain cursor-pointer'
              src={assets.MyDigitalEra}
              alt="MyDigitalEra - Crafting Stunning Websites & App mydigitalera logo"
            />
          </Link>
        </div>

        <div className='hidden md:flex space-x-6'>
          <ul className='flex items-center gap-4 font-semibold text-sm cursor-pointer'>
            <li>
              <Link to="work" smooth={true} duration={500}>Work</Link>
            </li>
            <li>
              <Link to="whyus" smooth={true} duration={500}>Benefits</Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500}>FAQ</Link>
            </li>
          </ul>
        </div>

        {/* <button
          onClick={onOpenPopup}
          className="before:ease relative h-10 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40"
        >
          <span className="relative z-10">Book a 15-min Call</span>
        </button> */}



        {/* Google form button */}
        <a
          href="https://forms.gle/KwcEmVWxmbDgZZrb9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="before:ease relative h-10 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40"
          >
            {/* <span className="relative z-10">Book a 15-min Call</span> */}
            <span className="relative z-10 font-semibold">Contact Us</span>
          </button>
        </a>

        {/*  Google form button  */}
      </motion.div>
    </section>
  )
}

export default Navbar
