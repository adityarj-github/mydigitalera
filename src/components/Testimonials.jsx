import React from 'react';
import { Testimonialsdata } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} className='flex flex-col items-center justify-center'>
        <div className='text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold text-center'>
          <h2>What people are <span className=' text-[#ff4432]'>saying</span> about us.</h2>
        </div>

        {/* Testimonials Data with Marquee Animation and Grid */}
        <div className='overflow-hidden h-80 mt-5'>
          <div className='animate-marquee'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
              {Testimonialsdata.map((item, index) => (
                <div key={index} className='testimonial-item max-w-[300px] rounded-xl flex flex-col items-start border-[0.5px] border-[#686868] p-3 mb-4'>
                  <div className='flex items-center gap-3'>
                    {/* <img className='w-10 h-10' src={item.image} alt="" /> */}
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-sm'>{item.name}</h2>
                      {/* <p className='text-[10px] text-[#686868]'>{item.title}</p> */}
                      <p className='text-[10px] text-[#686868]'>{item.location}</p>
                    </div>
                  </div>
                  <p className='text-sm mt-1'>{item.comment}</p>
                </div>
              ))}
              {/* Duplicate the data to create a seamless loop */}
              {Testimonialsdata.map((item, index) => (
                <div key={`duplicate-${index}`} className='testimonial-item max-w-[300px] rounded-xl flex flex-col items-start border-[0.5px] border-[#686868] p-3 mb-4'>
                  <div className='flex items-center gap-3'>
                    {/* <img className='w-10 h-10' src={item.image} alt="" /> */}
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-sm'>{item.name}</h2>
                      {/* <p className='text-[10px] text-[#686868]'>{item.title}</p> */}
                      <p className='text-[10px] text-[#686868]'>{item.location}</p>
                    </div>
                  </div>
                  <p className='text-sm'>{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
