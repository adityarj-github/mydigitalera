import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <section id='footer' className='max-w-[1280px] mx-auto bg-black  rounded-t-xl'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex items-start flex-col sm:flex-row gap-5 justify-between mb-5 p-5'>
                {/* First Row */}
                <div className='flex flex-col bottom-0 mx-auto sm:m-0'>
                    <div className='gap-2'>
                        <a href=""><img src={assets.MyDigitalEra} alt="MyDigitalEra - Crafting Stunning Websites & App mydigitalera logo" className='w-20' />

                            <h1 className='font-semibold text-xl mb-4 cursor-pointer'>MyDigital<span className='text-[#ff4432]'>Era</span>.</h1></a>
                        {/* <p class="font-semibold">We’re excited to help you grow!</p> */}

                        <p class="max-w-[350px]">
                            <strong>MyDigitalEra</strong> builds websites, apps, runs smart SEO, Google & Meta Ads, and delivers creative design — everything to grow your brand online.
                        </p>


                        {/* <p class="max-w-[350px]">Let’s elevate your brand in the digital world!</p> */}
                    </div>
                </div>

                {/* Second Row */}
                <div className='flex gap-5 items-start flex-col'>
                    <div className='flex flex-col items-start justify-center'>
                        <a href="" className='underline font-semibold'>Home</a>
                        <a href="https://forms.gle/WafzdGKephQc5ci78">Career</a>
                        <a href="https://forms.gle/KwcEmVWxmbDgZZrb9">Contact Us</a>
                    </div>


                    {/* Third Row */}
                    <div className='flex flex-col gap-4'>
                        <p className='text-white font-semibold underline'>Connect</p>
                        <div className='flex gap-5'>
                            <a href="https://wa.me/917856980700?text=Hi%2C%20I%27m%20interested%20in%20your%20services" target="_blank">
                                <img className='w-10 h-10 hover:scale-105 cursor-pointer' src={assets.whatsapp} alt="" />
                            </a>

                            <a href="mailto:info.mydigitalera@gmail.com?subject=Contact%20Request&body=Hi%2C%20I%20want%20to%20get%20in%20touch" target="_blank">
                                <img className='w-10 h-10 hover:scale-105 cursor-pointer' src={assets.gmail} alt="" />
                            </a>


                            <a href="https://www.instagram.com/mydigitalera/" target="_blank">
                                <img className='w-10 h-10 hover:scale-105 cursor-pointer' src={assets.instagram} alt="" />
                            </a>

                            <a href="https://www.linkedin.com/company/mydigitalera" target="_blank">
                                <img className='w-10 h-10 hover:scale-105 cursor-pointer' src={assets.linkedin} alt="" />
                            </a>

                            <a href="https://www.facebook.com/people/My-Digital-Era/61578224732690/" target="_blank">
                                <img className='w-10 h-10 hover:scale-105 cursor-pointer' src={assets.facebook} alt="" />
                            </a>
                        </div>

                        <a href="mailto:info.mydigitalera@gmail.com?subject=Contact%20Request&body=Hi%2C%20I%20want%20to%20get%20in%20touch" target="_blank">
                            <p className='text-[#909090] hover:text-white cursor-pointer'>info.mydigitalera@gmail.com</p>
                        </a>
                    </div>
                </div>
            </motion.div>
            <hr />

            <div className='text-sm flex justify-center items-center p-5 text-center'>
                <p>
                    © 2025 <span className="font-semibold">MyDigital<span className="text-[#ff4432]">Era</span></span>. | All Rights Reserved. | Web, SEO & Marketing Experts
                </p>

            </div>

        </section>
    )
}

export default Footer
