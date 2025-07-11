import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "917856980700"; // Your full number, no "+" or spaces
  const message = "Hi, I'm interested in your services";
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 border-white bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out"
      title="Chat with us on WhatsApp"
      animate={{
        y: ["0%", "-20%", "0%"], // Simple bounce effect
      }}
      transition={{
        duration: 1.5, // Duration for a full bounce
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <img
        className="w-10 h-10 hover:scale-105 cursor-pointer"
        src={assets.whatsapp}
        alt="WhatsApp Icon"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
