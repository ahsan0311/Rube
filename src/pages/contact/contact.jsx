import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    position: "",
    noticePeriod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const courses = [
    "MS Office",
    "Graphic Design",
    "Web Design",
    "Web Development",
    "WordPress Development",
    "MERN Stack Development",
    "3Ds Max",
    "AutoCAD",
    "Video Editing",
    "Computer Typing",
    "English Language",
    "Digital Marketing",
    "Daraz Seller Training",
    "Shopify eCommerce",
  ];

  emailjs.init("xiWxTl4QcJFvGkXBp");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    if (!formData.fullName || !formData.email || !formData.position) {
      setMessage("❌ Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        fullName: formData.fullName,
        contactNumber: formData.contactNumber || "Not provided",
        email: formData.email,
        position: formData.position,
        noticePeriod: formData.noticePeriod || "Not specified",
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString(),
      };

      await emailjs.send(
        "service_kiqh6qf",
        "template_axtc5md",
        templateParams
      );

      setMessage("✅ Application submitted successfully! We'll contact you soon.");
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        position: "",
        noticePeriod: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("❌ Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-b from-blue-50 to-white">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-lg border border-blue-100 shadow-2xl rounded-2xl p-8 w-full max-w-5xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Join Our Courses
          </h2>
          <p className="text-gray-600">Start your learning journey with us</p>
        </motion.div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="03XXXXXXXXX"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="example@gmail.com"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select a Course *
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              When can you join?
            </label>
            <textarea
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
              placeholder="Example: Immediately / After 15 days..."
              rows="3"
            />
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </motion.button>

        {/* Message */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-4 p-4 rounded-xl text-center font-medium ${
                message.includes("✅")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Map Section */}
      <div className="w-full max-w-5xl mt-10">
        <h3 className="text-center text-2xl font-bold text-blue-700 mb-4">
          View Our Location
        </h3>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border-2 border-blue-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.082279180779!2d67.04241367512789!3d24.86073414565615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0c1d9e1a9b%3A0x244f9a74f9969b2f!2sAzam%20Town%2C%20Karachi!5e0!3m2!1sen!2s!4v1697000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="text-center mt-4">
          <a
            href="https://goo.gl/maps/fmJpQHZvvukxRMZB9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
