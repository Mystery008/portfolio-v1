import { Brain, BarChart3, Code2, Cpu, Globe } from 'lucide-react'
import type { ComponentType } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

// Map each skill group to a unique icon and accent palette
const groupMeta: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>
    chipClass: string
    glowClass: string
    iconBg: string
    iconColor: string
    featured?: boolean
  }
> = {
  'Programming Languages': {
    icon: Code2,
    chipClass: 'hover:border-chart-3/70 hover:bg-chart-3/10 hover:text-chart-3',
    glowClass: 'hover:shadow-chart-3/20',
    iconBg: 'bg-chart-3/15',
    iconColor: 'text-chart-3',
  },
  'AI & Machine Learning': {
    icon: Brain,
    chipClass: 'hover:border-primary/70 hover:bg-primary/10 hover:text-primary',
    glowClass: 'hover:shadow-primary/25',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    featured: true,
  },
  'MLOps & Infrastructure': {
    icon: Cpu,
    chipClass: 'hover:border-accent/70 hover:bg-accent/10 hover:text-accent',
    glowClass: 'hover:shadow-accent/20',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
  },
  'APIs & Web Apps': {
    icon: Globe,
    chipClass: 'hover:border-chart-4/70 hover:bg-chart-4/10 hover:text-chart-4',
    glowClass: 'hover:shadow-chart-4/20',
    iconBg: 'bg-chart-4/15',
    iconColor: 'text-chart-4',
  },
  'Data & Analytics': {
    icon: BarChart3,
    chipClass: 'hover:border-chart-5/70 hover:bg-chart-5/10 hover:text-chart-5',
    glowClass: 'hover:shadow-chart-5/20',
    iconBg: 'bg-chart-5/15',
    iconColor: 'text-chart-5',
  },
}

export function SkillsSection() {
  // Separate the featured card ("AI & ML") from the rest
  const featured = skillGroups.find((g) => groupMeta[g.label]?.featured)
  const rest = skillGroups.filter((g) => !groupMeta[g.label]?.featured)

  return (
    <section id="skills" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Skills mapped to the ML lifecycle"
        />

        {/* Bento-style grid */}
        <div className="grid gap-4 lg:grid-cols-3">

          {/* Featured card: AI & Machine Learning — spans 2 cols, 2 rows */}
          {featured && (() => {
            const meta = groupMeta[featured.label]
            const Icon = meta.icon
            return (
              <Reveal className="lg:col-span-2">
                <div
                  className={`glass group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_80px_-20px] ${meta.glowClass}`}
                >
                  {/* Glow blob in background */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:opacity-100 opacity-60" />

                  <div className="flex items-start justify-between">
                    <span className={`flex size-12 items-center justify-center rounded-2xl ${meta.iconBg} ${meta.iconColor} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-3xl font-bold text-primary/20 transition-all duration-300 group-hover:text-primary/35 select-none">
                      {featured.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
                    {featured.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-sm">
                    {featured.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {featured.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`cursor-default rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${meta.chipClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-6">
                    <div className="h-px bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary/60">
                      Core discipline
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })()}

          {/* Rest of the cards — single column, stacked */}
          {rest.map((group, i) => {
            const meta = groupMeta[group.label]
            if (!meta) return null
            const Icon = meta.icon
            return (
              <Reveal key={group.label} delay={i * 70}>
                <div
                  className={`glass group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px] ${meta.glowClass} hover:border-border/80`}
                >
                  {/* Subtle corner glow */}
                  <div className={`pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${meta.iconBg}`} />

                  <div className="flex items-start justify-between">
                    <span className={`flex size-10 items-center justify-center rounded-xl ${meta.iconBg} ${meta.iconColor} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                      <Icon className="size-5" />
                    </span>
                    <span className={`font-mono text-2xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-300 select-none ${meta.iconColor}`}>
                      {group.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                    {group.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {group.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`cursor-default rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[0.7rem] text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 ${meta.chipClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
