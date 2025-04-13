import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react' // Make sure lucide-react is installed

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, we will send you a tracking number via email.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, MasterCard, PayPal, UPI, and most major debit/credit cards.",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl mb-4 bg-white shadow-md transition-all duration-300 ease-in-out">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
        <span className="text-gray-500 transition-transform duration-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] py-2 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </section>
  )
}
