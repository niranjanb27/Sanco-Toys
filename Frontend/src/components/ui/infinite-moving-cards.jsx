import React, { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame } from "framer-motion"

const speedMap = {
  fast: 50,
  normal: 30,
  slow: 15,
}

export function InfiniteMovingCards({
  items = [],
  direction = "left",
  speed = "normal",
}) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [x, setX] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)

  const speedValue = direction === "left" ? -speedMap[speed] : speedMap[speed]

  useEffect(() => {
    if (contentRef.current) {
      setScrollWidth(contentRef.current.scrollWidth / 3) // one set width
    }
  }, [items])

  useAnimationFrame((_, delta) => {
    if (!isHovered) {
      setX((prevX) => {
        let nextX = prevX + (speedValue * delta) / 1000
        if (Math.abs(nextX) >= scrollWidth) {
          return 0
        }
        return nextX
      })
    }
  })

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-6 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={contentRef}
        className="flex whitespace-nowrap gap-8"
        style={{ x }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-none bg-white border border-gray-200 shadow-md rounded-2xl px-8 py-6 w-[360px] text-left break-words min-h-[200px] flex flex-col justify-between"
          >
            <p className="text-gray-800 text-base leading-relaxed mb-4 whitespace-pre-line">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="text-gray-600 text-sm mt-auto">
              <strong className="block text-md text-black">{item.name}</strong>
              {item.role}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
