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
      {/* Gift Bow */}
      {isActive && (
        <div className="absolute left-1/2 top-0 h-3 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600" />
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

      {/* Ribbon (vertical) */}
      {isActive && <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-red-600/60" />}
    </div>
  )
}
