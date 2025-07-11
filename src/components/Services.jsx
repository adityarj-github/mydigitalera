import React from 'react'
import { powerPackage } from '../assets/assets'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <section>
            {/* <div className='flex flex-col sm:flex-row items-center justify-between mt-5 mb-5'>
                <div className='text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold'>
                    <h2>Our <span className=' text-[#ff4432]'>Services</span>.</h2>
                    <p className='text-lg'>We take care of all your needs...</p>
                </div>

                <div className='flex flex-col text-3xl sm:text-xl'>
                    <h3>Web Development</h3>
                    <h3>App Development</h3>
                    <h3>SEO</h3>
                    <h3>Meta and Google Ads</h3>
                    <h3>Website Audit</h3>
                </div>
            </div> */}


            <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className="bg-[#121212] text-white flex justify-center p-6 mt-12 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-around max-w-6xl w-full">
                    {/* Left Section */}
                    <div className="mb-10 md:mb-0 md:mr-7">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#ff4432] mb-4">
                            Our Power Package
                        </h1>
                        <p className="text-lg text-white">We take care of all your needs...</p>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col space-y-4 text-2xl font-semibold ">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {powerPackage.map((item, index) => (
                                <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>
                                    <span style={{ marginRight: '10px' }}>{item.icon}</span>
                                    {item.service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Services