import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    identity: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    // You can add Firebase, API call, or toast here
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Who are you?
          </label>
          <select
            name="identity"
            value={formData.identity}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black-200"
          >
            <option value="" disabled>
              Select your identity
            </option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Retailer">Retailer</option>
            <option value="Customer">Customer</option>
            <option value="Distributor">Distributor</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Feedback
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black-500"
            placeholder="Share your feedback here..."
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
