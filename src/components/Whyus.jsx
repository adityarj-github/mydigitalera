import React from 'react'
import { whyChooseUs } from '../assets/assets'
import { motion } from 'framer-motion'

const Whyus = () => {
    return (
        <section id='whyus'>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className='flex flex-col items-center justify-center mt-5'>
                <div className='text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold text-center'>
                    <h2>But, like <span className=' text-[#ff4432]'>why</span> us?</h2>
                </div>
                {/* Why Us */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto mt-5'>
                    {
                        whyChooseUs.map((item, index) => (
                            <div key={index} className='flex'>
                                <div className='max-w-[300px] flex flex-col items-center md:items-start gap-5'>
                                    <div className='text-5xl'>{item.icon}</div>
                                    <h2 className='text-[18px] font-semibold'>{item.title}</h2>
                                    <p className='text-[#686868] text-sm text-center md:text-start'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </motion.div>
        </section>
    )
}

export default Whyus
