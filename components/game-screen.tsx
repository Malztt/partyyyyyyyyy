"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GiftBox } from "@/components/gift-box"
import { ScenarioModal } from "@/components/scenario-modal"

interface Player {
  number: number
  isActive: boolean
}

interface GameScreenProps {
  players: Player[]
  onEliminate: (playerNumber: number) => void
  onReset: () => void
}

const scenarios = [
  "โฮ่ โฮ่ โฮ่... คุณไม่ได้ไปต่อ! (ตกรอบทันที)",
  "โชว์มือถือ! ถ้าแบตเตอรี่ต่ำกว่า 50% ... ตกรอบ!",
  "ค้นกระเป๋าตังค์! ถ้าไม่มีเหรียญบาทเลยสักเหรียญ ... ตกรอบ!",
  "ดูเลขท้ายเบอร์มือถือตัวสุดท้าย! ถ้าเป็น 'เลขคี่' ... ตกรอบ!",
  "เช็ค Gallery รูปล่าสุด! ถ้าไม่ใช่รูปตัวเอง (Selfie) ... ตกรอบ!",
  "จับผิด! ถ้าบนตัวไม่มีสีแดงหรือเขียวเลยสักชิ้น ... ตกรอบ!",
  "เป่ายิงฉุบกับคนขวามือ! ถ้าแพ้ ... ตกรอบ!",
  "เป่ายิงฉุบกับคนซ้ายมือ! ถ้าแพ้ ... ตกรอบ!",
]

export function GameScreen({ players, onEliminate, onReset }: GameScreenProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)
  const [scenario, setScenario] = useState<string>("")
  const [currentHighlight, setCurrentHighlight] = useState<number | null>(null)

  const activePlayers = players.filter((p) => p.isActive)

  const handleOpenGift = async () => {
    if (isSpinning || activePlayers.length === 0) return

    setIsSpinning(true)
    setSelectedPlayer(null)

    // Spinning animation for 3 seconds
    let spinCount = 0
    const spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * activePlayers.length)
      setCurrentHighlight(activePlayers[randomIndex].number)
      spinCount++

      if (spinCount > 30) {
        clearInterval(spinInterval)

        // Select final player
        const finalPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)]
        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)]

        setCurrentHighlight(finalPlayer.number)
        setTimeout(() => {
          setSelectedPlayer(finalPlayer.number)
          setScenario(randomScenario)
          setIsSpinning(false)
          setCurrentHighlight(null)
        }, 500)
      }
    }, 100)
  }

  const handleVerdict = (eliminated: boolean) => {
    if (selectedPlayer && eliminated) {
      onEliminate(selectedPlayer)
    }
    setSelectedPlayer(null)
    setScenario("")
  }

  return (
    <div className="relative z-10 min-h-screen px-4 py-8">
      <div className="mb-4">
        <Button onClick={onReset} className="bg-white/20 font-sans text-sm font-semibold text-white hover:bg-white/30">
          Reset / กลับหน้าแรก
        </Button>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <p className="font-sans text-2xl font-bold text-white md:text-3xl">เหลือผู้เล่น: {activePlayers.length} คน</p>
      </div>

      {/* Grid */}
      <div className="mx-auto mb-32 grid max-w-6xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {players.map((player) => (
          <GiftBox
            key={player.number}
            number={player.number}
            isActive={player.isActive}
            isHighlighted={currentHighlight === player.number}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-christmas-bg via-christmas-bg/95 to-transparent p-4 pb-8">
        <div className="mx-auto max-w-2xl">
          <Button
            onClick={handleOpenGift}
            disabled={isSpinning || activePlayers.length === 0}
            className="h-24 w-full animate-bounce-slow rounded-3xl border-8 border-christmas-gold bg-[#ff0000] font-sans text-2xl font-bold text-white shadow-2xl transition-transform hover:scale-105 hover:bg-[#ff0000]/90 disabled:opacity-50 md:text-3xl"
          >
            {isSpinning ? "กำลังเลือก..." : "เปิดกล่องของขวัญซานต้า"}
          </Button>
        </div>
      </div>

      {/* Scenario Modal */}
      {selectedPlayer && <ScenarioModal playerNumber={selectedPlayer} scenario={scenario} onVerdict={handleVerdict} />}
    </div>
  )
}
