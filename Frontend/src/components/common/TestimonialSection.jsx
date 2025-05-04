import React from 'react'
import Testimonial from './Testimonial' // adjust path if needed
// import { Button } from "@/components/ui/button" // if you're using shadcn/ui button
import { useNavigate } from 'react-router-dom'

const TestimonialSection = () => {
    const navigate = useNavigate()

    return (
        <section className="w-full px-4 py-16 bg-white">
            <div className="w-[96%] mx-auto">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                    What Our Happy Customers Say
                </h2>

                {/* Testimonial Carousel Component */}
                <Testimonial />

                {/* Button */}
                <div className="flex justify-end mt-8">
                    {/* <Button
            className="bg-black text-white hover:bg-gray-800 transition-all"
            onClick={() => navigate('/feedback')}
          >
            Give Your Feedback
          </Button> */}

                    {/* <button
                        className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all"
                        onClick={() => navigate('/feedback-form')}
                    >
                        Give Your Feedback
                    </button> */}

                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
