import React, { useState } from 'react';
import { faqs } from '../assets/assets';
import { motion } from "framer-motion"

const FAQ = () => {

  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id='faq'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-4xl md:text-4xl lg:text-5xl mb-0 lg:mb-4 mt-12 mx-auto font-semibold text-center">You got <span className='text-[#ff4432]'>Question?</span> We got <span className='text-[#ff4432]'>Answer.</span></h2>
        <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0d0d0d] border border-[#ffffff36] p-2 md:p-4 rounded-lg shadow-md">
              <button
                className="w-full text-left text-sm sm:text-lg font-medium text-white"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </button>
              {open === index && (
                <div className="mt-2 text-sm sm:text-lg text-[#ffffff80]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
