import React from 'react'
import { pricing } from '../assets/assets'

const Pricing = () => {
    return (
        <section id='pricing'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold text-center'>
                    <h2>Transparent<span className=' text-[#ff4432]'> Pricing</span>.</h2>
                </div>
                {/* pricing */}
                <div className='flex flex-col items-center justify-between gap-10 mt-5 md:flex md:flex-row'>
                    {
                        pricing.map((item, index) => (
                            <div key={index} className='border border-[#ffffff20] flex flex-col items-start p-5 rounded bg-[#0000007a]'>
                                <h1 className='font-semibold text-3xl'>{item.title}</h1>
                                <h1 className='text-[#ff4432] mt-2 text-3xl'>{item.price}</h1>
                                <h3 className='mt-3'>What's Included?</h3>
                                <div className='mt-3 font-semibold'>
                                    <p>- {item.feature_a}</p>
                                    <p>- {item.feature_b}</p>
                                    <p>- {item.feature_c}</p>
                                    <p>- {item.feature_d}</p>
                                    <p>- {item.feature_e}</p>
                                </div>
                                <div className='flex items-center justify-between gap-12 mt-3'>
                                    {/* desc */}
                                    <button class="before:ease hover:scale-105 relative h-10 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40">
                                        <span class="relative z-10">Book a 15-min Call</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Pricing
