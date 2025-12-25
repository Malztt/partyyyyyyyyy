"use client"

import { Button } from "@/components/ui/button"

interface ScenarioModalProps {
  playerNumber: number
  scenario: string
  onVerdict: (eliminated: boolean) => void
}

export function ScenarioModal({ playerNumber, scenario, onVerdict }: ScenarioModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl animate-scale-in rounded-3xl bg-white p-8 shadow-2xl">
        {/* Player Number */}
        <div className="mb-6 text-center">
          <div className="mb-4 inline-block rounded-2xl bg-christmas-gold px-8 py-4">
            <span className="font-sans text-6xl font-bold text-black">#{playerNumber}</span>
          </div>
        </div>

        {/* Scenario Text */}
        <div className="mb-8 rounded-2xl bg-red-50 p-6">
          <p className="text-balance font-sans text-2xl font-semibold leading-relaxed text-black md:text-3xl">
            {scenario}
          </p>
        </div>

        {/* Verdict Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => onVerdict(false)}
            className="h-16 bg-green-600 font-sans text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700"
          >
            รอด / ทำได้ (PASS)
          </Button>
          <Button
            onClick={() => onVerdict(true)}
            className="h-16 bg-red-600 font-sans text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-700"
          >
            ไม่ได้ / ตกรอบ (FAIL)
          </Button>
        </div>
      </div>
    </div>
  )
}
