import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    position: "",
    portfolioOption: "",
    portfolioLink: "",
    resume: null,
    noticePeriod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const positions = [
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

  // Initialize EmailJS with your Public Key
  emailjs.init("xiWxTl4QcJFvGkXBp");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.position) {
      setMessage("❌ Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters
      const templateParams = {
        fullName: formData.fullName,
        contactNumber: formData.contactNumber || "Not provided",
        email: formData.email,
        position: formData.position,
        portfolioOption: formData.portfolioOption || "Not provided",
        portfolioLink: formData.portfolioLink || "Not provided",
        noticePeriod: formData.noticePeriod || "Not specified",
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_kiqh6qf", // Service ID
        "template_axtc5md", // Template ID
        templateParams
      );

      console.log("EmailJS Success:", result);

      setMessage("✅ Application submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        position: "",
        portfolioOption: "",
        portfolioLink: "",
        resume: null,
        noticePeriod: "",
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("❌ Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  mt-15 flex justify-center items-center px-4 py-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg border border-blue-100 shadow-2xl rounded-2xl p-8 w-full max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Join Our Team
          </h2>
          <p className="text-gray-600">Start your career journey with us</p>
        </motion.div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Full Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
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

          {/* Contact Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
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

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
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

          {/* Position */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Position *
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              required
            >
              <option value="">Select a position</option>
              {positions.map((pos, index) => (
                <option key={index} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="md:col-span-2"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Portfolio
            </label>
            <select
              name="portfolioOption"
              value={formData.portfolioOption}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 mb-4"
            >
              <option value="">Do you have a portfolio?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <AnimatePresence>
              {formData.portfolioOption === "Yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <input
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                    placeholder="https://your-portfolio.com"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Resume Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-2"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Resume (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 transition-all duration-200">
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="hidden"
                id="resume-upload"
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {formData.resume ? formData.resume.name : "Click to upload resume"}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</span>
                </div>
              </label>
            </div>
          </motion.div>

          {/* Notice Period */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="md:col-span-2"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              When can you join? (Notice Period)
            </label>
            <textarea
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
              placeholder="Example: Immediately available / 2 weeks notice period..."
              rows="3"
            />
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting Application...</span>
            </div>
          ) : (
            "Submit Application"
          )}
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
    </div>
  );
};

export default JobApplicationForm;