"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  rotation: number
}

const colors = ["#DC2626", "#16A34A", "#EAB308", "#FFFFFF"]

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const confettiPieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }))
    setPieces(confettiPieces)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: "10px",
            height: "10px",
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}
