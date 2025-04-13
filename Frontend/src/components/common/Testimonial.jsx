// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards.jsx"

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Verified Buyer",
        quote: "Absolutely love the plushies! Great quality and fast delivery.",
    },
    {
        name: "Mark Lee",
        role: "Parent",
        quote: "My kids are obsessed with these toys. Customer service is amazing!",
    },
    {
        name: "Sarah Chen",
        role: "Toy Collector",
        quote: "Beautifully designed and worth every penny. 10/10 would recommend.",
    },
]

import React from 'react'

function Testimonial() {
    return (
        <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
        />
    )
}

export default Testimonial;

