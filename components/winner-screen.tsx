"use client"

import { Button } from "@/components/ui/button"
import { Confetti } from "@/components/confetti"

interface WinnerScreenProps {
  winner: { number: number; isActive: boolean }
  onReset: () => void
}

export function WinnerScreen({ winner, onReset }: WinnerScreenProps) {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
      <Confetti />

      <div className="w-full max-w-2xl text-center">
        {/* Trophy */}
        <div className="mb-8 animate-bounce-slow text-9xl">🏆</div>

        {/* Winner Title */}
        <h1 className="mb-4 font-sans text-5xl font-bold text-christmas-gold animate-pulse-glow md:text-6xl lg:text-7xl">
          ผู้ชนะ!
        </h1>

        {/* Winner Number */}
        <div className="mb-8 inline-block rounded-3xl bg-christmas-gold px-12 py-6 shadow-2xl">
          <span className="font-sans text-8xl font-bold text-black">#{winner.number}</span>
        </div>

        {/* Congratulations Message */}
        <p className="mb-12 font-sans text-3xl font-semibold text-white md:text-4xl">ผู้ชนะรับรางวัลใหญ่จากซานต้า!</p>

        {/* Celebration Icons */}
        <div className="mb-8 flex justify-center gap-6 text-6xl">
          <span className="animate-bounce">🎁</span>
          <span className="animate-bounce delay-100">🎄</span>
          <span className="animate-bounce delay-200">⭐</span>
          <span className="animate-bounce delay-300">🎅</span>
          <span className="animate-bounce delay-[400ms]">🔔</span>
        </div>

        {/* Play Again Button */}
        <Button
          onClick={onReset}
          className="h-16 rounded-3xl bg-[#00ff00] px-12 font-sans text-2xl font-bold text-black shadow-xl transition-transform hover:scale-105 hover:bg-[#00ff00]/90"
        >
          เล่นอีกครั้ง
        </Button>
      </div>
    </div>
  )
}
