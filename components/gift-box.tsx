import { cn } from "@/lib/utils"

interface GiftBoxProps {
  number: number
  isActive: boolean
  isHighlighted?: boolean
}

export function GiftBox({ number, isActive, isHighlighted }: GiftBoxProps) {
  return (
    <div
      className={cn(
        "relative aspect-square rounded-xl p-4 transition-all duration-300",
        isActive && !isHighlighted && "bg-white shadow-lg",
        isActive && isHighlighted && "animate-pulse bg-christmas-gold shadow-2xl scale-110",
        !isActive && "bg-gray-700 opacity-50",
      )}
    >
      {/* Gift Bow (Corner) */}
      {isActive && (
        <div className="absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center">
          <div className="absolute h-3 w-10 rotate-45 rounded-full bg-red-600 shadow-md" />
          <div className="absolute h-3 w-10 -rotate-45 rounded-full bg-red-600 shadow-md" />
          <div className="absolute z-10 h-4 w-4 rounded-full bg-red-700 shadow-inner" />
        </div>
      )}

      {/* Number */}
      <div className="flex h-full items-center justify-center">
        <span
          className={cn(
            "font-sans text-2xl font-bold md:text-3xl lg:text-4xl",
            isActive ? "text-black" : "text-red-600",
          )}
        >
          {number}
        </span>
      </div>

      {/* X Mark for eliminated */}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-sans text-5xl font-bold text-red-600">✕</span>
        </div>
      )}


    </div>
  )
}
