import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 font-mono text-xs text-primary">
        <span className="rounded-md bg-primary/10 px-2 py-1">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
        <span className="uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
        <span className="ml-1 inline-block h-7 w-1.5 translate-y-0.5 animate-pulse rounded-sm bg-primary align-middle sm:h-8" />
      </h2>
    </Reveal>
  )
}
