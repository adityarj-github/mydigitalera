import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Whyus from './components/Whyus';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Popup from './components/Popup';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton ';

const App = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' id='home'>
      <Navbar onOpenPopup={handleOpenPopup} />
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <Hero onOpenPopup={handleOpenPopup} />
      <Work />
      <Process />
      <Services />
      <Testimonials />
      <Whyus />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
