import React from 'react';
import { projectData } from '../assets/assets';
import { motion } from 'framer-motion';

const Work = () => {
    return (
        <section id="work" className="py-12 lg:py-24">
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-4"
            >
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        Grow your business with <span className="text-[#ff4432]">SEO-ready</span> websites by <span className="text-[#ff4432]">MyDigitalEra</span>.
                    </h1>


                </div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto">
                    <div className="flex gap-6 w-max px-2 mx-auto justify-center">
                        {projectData.map((item, index) => (
                            <div
                                key={index}
                                className="
                                    flex-shrink-0 
                                    h-[250px] 
                                    rounded-lg 
                                    overflow-hidden 
                                    shadow-md
                                    relative
                                    w-[calc(100vw-2rem)] 
                                    sm:w-[calc(50%-12px)] 
                                    md:w-[calc(33.333%-16px)] 
                                    xl:w-[calc(25%-18px)]
                                "
                            >
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
                                    <p className="font-semibold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Work;
