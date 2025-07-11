import React from 'react'
import { process } from '../assets/assets'
import { motion } from 'framer-motion';

const Process = () => {
    return (
        <section id='process'>
            <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className='flex flex-col items-center justify-center'>
                <div className='text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold text-center'>
                    <h2>Our <span className=' text-[#ff4432]'>3-Step</span> process.</h2>
                </div>
                <div className='flex items-start justify-between p-5 gap-4 mt-3'>
                    {
                        process.map((item, index) => (
                            < div key={index} className='max-w-[350px]  flex flex-col items-center justify-center' >
                                <h1 className='text-white text-6xl md:text-8xl'>{item.step}</h1>
                                <h3 className='text-[#ff4432] text-2xl md:text-3xl font-semibold'>{item.title}</h3>
                                <p className='text-[#686868] text-center text-sm mt-2'>{item.desc}</p>
                            </div>
                        ))}
                </div>
            </motion.div>

        </section >
    )
}

export default Process
