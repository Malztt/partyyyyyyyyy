"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function FallingSnow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      size: 5 + Math.random() * 10,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-fall opacity-80"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        >
          <div className="h-full w-full rounded-full bg-white shadow-sm" />
        </div>
      ))}
    </div>
  )
}
