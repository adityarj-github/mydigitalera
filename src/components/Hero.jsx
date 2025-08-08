import React from 'react'
import { motion } from "framer-motion"

const Hero = ({ onOpenPopup }) => {
    return (
        <section id='hero'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-4 bg-[#121212] p-4 rounded-lg w-fit shadow-md mt-6">
                    {/* Overlapping Avatars */}
                    <div className="flex -space-x-3">
                        <img
                            src="https://mockmind-api.uifaces.co/content/cartoon/25.jpg"
                            alt="user1"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://mockmind-api.uifaces.co/content/cartoon/4.jpg"
                            alt="user2"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://mockmind-api.uifaces.co/content/cartoon/19.jpg"
                            alt="user3"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    </div>

                    {/* Stars & Text */}
                    <div>
                        <div className="text-xl">🧑‍💻</div>
                        <div className="text-sm font-medium text-white">12+ Brands Scaled with Us</div>
                        <div className="text-xs text-gray-400">And Growing Daily</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-col justify-center mt-12 mx-auto items-center'>
                {/* <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold items-center text-center leading-none'>We build websites that <br /> convert  <span className='text-[#ff4432]'>visitors</span> into <span className='text-[#ff4432]'>customers.</span></h1> */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold items-center text-center leading-none'>
                    Full-Service Digital Growth: <br />
                    From <span className='text-[#ff4432]'>Websites</span> to <span className='text-[#ff4432]'>Ads</span>, <span className='text-[#ff4432]'>SEO</span> & <span className='text-[#ff4432]'>Content</span>.
                </h1>
                <p className='text-[#686868] text-sm md:text-xl mx-auto max-w-xl md:max-w-2xl text-center mt-5'>MyDigitalEra boosts your online presence with SEO-optimized websites, mobile apps, targeted ads, engaging content, and expert strategy — all in one place to drive leads, conversions, and long-term business growth.</p>
                {/* <p className='text-[#686868] text-sm md:text-xl mx-auto max-w-xl md:max-w-2xl text-center mt-5'>MyDigitalEra helps your business grow with stunning websites, user-friendly apps, smart SEO, and high-performing ads. We handle content creation, video editing, and strategy — all under one roof — to boost your online presence and drive real, measurable results</p> */}
                {/* <button onClick={onOpenPopup} class="before:ease relative h-10 mt-5 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40">
                    <span class="relative z-10">Book a 15-min Call</span>
                </button> */}

                {/* Google form button */}
                <a
                    href="https://forms.gle/KwcEmVWxmbDgZZrb9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="before:ease relative h-10 mt-5 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40"
                    >
                        {/* <span className="relative z-10">Book a 15-min Call</span> */}
                        <span className="relative z-10 font-semibold">Contact Us</span>
                    </button>
                </a>

                {/*  Google form button end */}

                <h5 className='text-[#686868] mx-auto max-w-xl text-center mt-8'>Built for Growth. Backed by Transparency.</h5>

            </motion.div>
        </section >
    )
}

export default Hero
