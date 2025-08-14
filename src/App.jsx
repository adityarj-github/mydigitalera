import React, { useEffect, useRef, useState } from 'react'
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

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for Custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


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

      {/* Custom Cursor Ring */}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-[#ff4321] pointer-events-none z-[9999]' style={{ transition: 'transform 0.1s ease-out' }}>
      </div>


      {/* Custom Cursor Dot */}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-[#ff4321] pointer-events-none z-[9999]'>
      </div>



    </div>
  )
}

export default App
