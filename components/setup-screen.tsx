"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SetupScreenProps {
  onStart: (numberOfPlayers: number) => void
}

export function SetupScreen({ onStart }: SetupScreenProps) {
  const [playerCount, setPlayerCount] = useState<string>("")

  const handleStart = () => {
    const count = Number.parseInt(playerCount)
    if (count > 1 && count <= 100) {
      onStart(count)
    }
  }

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-7xl space-y-12 text-center">
        {/* Santa Hat Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex flex-wrap justify-center gap-8">
            <img
              src="/santa-custom.png"
              alt="Santa"
              className="h-80 w-80 object-contain animate-bounce-slow md:h-96 md:w-96"
            />
            <img
              src="/santa-custom.png"
              alt="Santa"
              className="h-80 w-80 object-contain animate-bounce-slow delay-100 md:h-96 md:w-96"
            />
            <img
              src="/santa-custom.png"
              alt="Santa"
              className="h-80 w-80 object-contain animate-bounce-slow delay-200 md:h-96 md:w-96"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-sans text-7xl font-bold text-christmas-gold animate-pulse-glow md:text-8xl lg:text-9xl">
          เกมวัดดวง
        </h1>

        {/* Input Section */}
        <div className="space-y-8">
          <label className="block font-sans text-2xl font-medium text-christmas-white">จำนวนผู้ร่วมสนุก (คน)</label>
          <Input
            type="number"
            min="2"
            max="100"
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
            className="h-20 border-0 bg-white font-sans text-3xl text-black placeholder:text-black/50 md:h-24 md:text-4xl"
            placeholder="ใส่จำนวนคน"
          />

          {/* Start Button */}
          <Button
            onClick={handleStart}
            disabled={!playerCount || Number.parseInt(playerCount) < 2}
            className="h-20 w-full rounded-3xl bg-[#00ff00] font-sans text-3xl font-bold text-black shadow-2xl transition-transform hover:scale-105 hover:bg-[#00ff00]/90 disabled:opacity-50 md:h-24 md:text-4xl"
          >
            เริ่มปาร์ตี้!
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🎁</span>
          <span className="animate-bounce delay-100">⭐</span>
          <span className="animate-bounce delay-200">🎄</span>
          <span className="animate-bounce delay-300">🔔</span>
        </div>
      </div>
    </div>
  )
}
