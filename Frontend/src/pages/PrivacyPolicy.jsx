import React from 'react';
import { ShieldCheck } from 'lucide-react'; // ✅ Make sure lucide-react is installed

const privacypolicy = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Animated Heading with Icon */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up">
          <ShieldCheck className="text-red-500 w-10 h-10" />
          <h1 className="text-5xl font-bold text-red-500">Privacy policy</h1>
        </div>

        <div className="text-lg text-white leading-8 space-y-6 animate-fade-in">
          <p className='text-green-200'>
            At <span className="font-semibold text-primary">SancoToys</span>, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">1. Information We Collect</h2>
          <p className='text-green-200'>
            We may collect your name, contact details, shipping address, payment information, order history, and device/browser data to help process orders and improve your shopping experience.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">2. How We Use Your Information</h2>
          <p className='text-green-200'>
            Your information is used to process orders, personalize your experience, communicate with you, and improve our services. We do not sell your personal data.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">3. Data Security</h2>
          <p className='text-green-200'>
            We use secure servers, encryption, and limited access to protect your data. payment processing is handled through trusted third-party gateways.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">4. Cookies & Tracking</h2>
          <p className='text-green-200'>
            We use cookies to analyze traffic, enhance functionality, and personalize content. You can manage your cookie preferences in your browser settings.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">5. Your Rights</h2>
          <p className='text-green-200'>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@sancotoys.com" className="text-blue-600 underline">info@sancotoys.com</a>.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">6. policy Updates</h2>
          <p className='text-green-200'>
            We may update this privacy policy periodically. please check this page regularly to stay informed.
          </p>

          <h2 className="text-3xl font-semibold text-red-200 mb-4">7. Contact Us</h2>
          <p className='text-green-200'>
            If you have any questions about this privacy policy or how we handle your data, feel free to reach out at <a href="mailto:info@sancotoys.com" className="text-blue-600 underline">info@sancotoys.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default privacypolicy;
