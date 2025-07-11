import React, { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    datetime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", formData);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#121212] text-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 text-2xl"
          aria-label="Close popup"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-center">Book an Appointment</h2>
            <p className="text-gray-300 text-center mb-6">
              Let’s talk about your next project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-1 w-full bg-[#1e1e1e] text-white border border-gray-600 rounded px-3 py-2 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email 
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1 w-full bg-[#1e1e1e] text-white border border-gray-600 rounded px-3 py-2 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  className="mt-1 w-full bg-[#1e1e1e] text-white border border-gray-600 rounded px-3 py-2 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  pattern="^\+?[0-9\s\-]{7,15}$"
                  title="Enter a valid phone number"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 w-full bg-[#1e1e1e] text-white border border-gray-600 rounded px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="SEO">SEO Optimization</option>
                  <option value="E-commerce">E-commerce Setup</option>
                </select>
              </div>

              {/* Date & Time combined */}
              {/* <div>
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-300">
                  Preferred Date & Time <span className="text-red-500">*</span>
                </label>
                <input
                  id="datetime"
                  type="datetime-local"
                  name="datetime"
                  required
                  value={formData.datetime}
                  onChange={handleChange}
                  className="mt-1 w-full bg-[#1e1e1e] text-white border border-gray-600 rounded px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div> */}

              <button
                type="submit"
                className="relative h-10 rounded-lg w-40 overflow-hidden bg-[#ff4432] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#ff4432] hover:before:-translate-x-40"
              >
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="mb-6 text-gray-300">Your appointment request has been received.</p>
            <button
              onClick={onClose}
              className="bg-[#ff4432] text-white py-2 px-6 rounded hover:bg-[#ff4432] transition"
            >
              Close
            </button>
          </div>
        )}
      </div> 
    </div>
  );
};

export default Popup;
