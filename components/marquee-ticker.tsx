import { tickerItems } from '@/lib/portfolio-data'

export function MarqueeTicker() {
  return (
    <div className="marquee-group relative flex overflow-hidden border-y border-border bg-card/45 py-4 select-none">
      <div className="marquee-track flex shrink-0 items-center gap-6 pr-6">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-6">
            <span className="font-display text-lg font-bold text-muted-foreground sm:text-2xl">
              {item}
            </span>
            <span className="inline-block h-2 w-8 rounded-full bg-primary/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
