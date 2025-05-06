import React from 'react';
import { Headphones ,Phone, Mail, Clock} from 'lucide-react'; // Import the icon

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-500 mb-10 text-center animate-fade-in-up delay-[200ms] flex items-center justify-center gap-4">
          <Headphones className="w-12 h-12 text-red-500" />
          Customer Care
        </h1>

        <div className="text-lg text-green-200 leading-8 space-y-6">
          <p>
            At <span className="font-semibold text-primary">SancoToys</span>, we prioritize your satisfaction and aim to provide a seamless shopping experience from start to finish.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6 text-gray-700" /> Contact Information
          </h2>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" /> <span>+91 8446090922</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" /> <span>info@sancotoys.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" /> <span>Friday-Wednesday, 10 AM to 6 PM</span>
            </p>
          </div>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">Returns & Refunds</h2>
          <p>
            If you’re not completely satisfied with your purchase, you can return the product within 7 days of delivery.
            Please ensure the product is unused and in its original packaging. Refunds will be processed within 3–5 business days.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">Feedback</h2>
          <p>
            We love hearing from you! Your feedback helps us improve our products and services. Feel free to drop us a message anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
