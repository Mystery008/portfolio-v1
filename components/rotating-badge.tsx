import { Sparkles } from 'lucide-react'

export function RotatingBadge({ text = 'OPEN TO WORK · AI / ML ENGINEER · ' }: { text?: string }) {
  const chars = text.split('')
  return (
    <div className="relative size-28 sm:size-32">
      <div className="animate-spin-slow absolute inset-0">
        <svg viewBox="0 0 100 100" className="size-full">
          <defs>
            <path
              id="badge-circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-foreground font-mono text-[9px] font-medium uppercase tracking-[0.02em]">
            <textPath href="#badge-circle" startOffset="0">
              {chars.map((c, i) => (
                <tspan key={i}>{c}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="size-5" />
        </div>
      </div>
    </div>
  )
}
