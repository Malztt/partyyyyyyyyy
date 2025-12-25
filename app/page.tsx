"use client"

import { useState } from "react"
import { SetupScreen } from "@/components/setup-screen"
import { GameScreen } from "@/components/game-screen"
import { WinnerScreen } from "@/components/winner-screen"
import { FallingSnow } from "@/components/falling-snow"

export default function Home() {
  const [gameState, setGameState] = useState<"setup" | "playing" | "winner">("setup")
  const [players, setPlayers] = useState<{ number: number; isActive: boolean }[]>([])

  const startGame = (numberOfPlayers: number) => {
    const initialPlayers = Array.from({ length: numberOfPlayers }, (_, i) => ({
      number: i + 1,
      isActive: true,
    }))
    setPlayers(initialPlayers)
    setGameState("playing")
  }

  const eliminatePlayer = (playerNumber: number) => {
    const updatedPlayers = players.map((p) => (p.number === playerNumber ? { ...p, isActive: false } : p))
    setPlayers(updatedPlayers)

    const activePlayers = updatedPlayers.filter((p) => p.isActive)
    if (activePlayers.length === 1) {
      setTimeout(() => setGameState("winner"), 500)
    }
  }

  const resetGame = () => {
    setGameState("setup")
    setPlayers([])
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a1a]">
      <FallingSnow />

      {gameState === "setup" && <SetupScreen onStart={startGame} />}

      {gameState === "playing" && <GameScreen players={players} onEliminate={eliminatePlayer} onReset={resetGame} />}

      {gameState === "winner" && <WinnerScreen winner={players.find((p) => p.isActive)!} onReset={resetGame} />}
    </main>
  )
}
