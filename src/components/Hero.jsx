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
                className='flex flex-col justify-center mt-12 mx-auto items-center'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold items-center text-center leading-none'>We build websites that <br /> convert  <span className='text-[#ff4432]'>visitors</span> into <span className='text-[#ff4432]'>customers.</span></h1>
                <p className='text-[#686868] text-sm md:text-xl mx-auto max-w-xl md:max-w-2xl text-center mt-5'>High-converting websites designed with strategic copy and seamless development to attract ready-to-buy customers, turning visitors into loyal clients and driving growth.</p>
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

                <h5 className='text-[#686868] mx-auto max-w-xl text-center mt-8'>Fixed Prices. No long-term contracts.</h5>

            </motion.div>
        </section >
    )
}

export default Hero
