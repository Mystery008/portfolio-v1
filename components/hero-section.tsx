import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Download,
  MapPin,
  Radar,
  Sparkles,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import {
  profile,
  proofPoints,
  techPills,
} from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { RotatingBadge } from '@/components/rotating-badge'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-14 sm:pt-40 sm:pb-20"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-card/60 px-3 py-1 font-mono text-xs text-foreground shadow-sm">
              <span className="status-dot" />
              Open to AI/ML, Software Engineering, and Data roles
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              {profile.title}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.03] text-balance sm:text-5xl lg:text-[4.25rem]">
              Building practical{' '}
              <span className="text-gradient">AI/ML models</span>{' '}
              and reliable software systems.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
              >
                View Projects
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary active:scale-95"
              >
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                Resume
              </a>
              <div className="ml-1 flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex size-11 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex size-11 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tech stack pills */}
          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap gap-2">
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              {profile.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-sm group">
          <div className="animate-float-slow relative transition-transform duration-500 ease-out group-hover:-translate-y-2">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-chart-3/20 to-accent/30 blur-2xl opacity-75 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105" />
            <TiltCard className="glass relative overflow-hidden rounded-[2rem] border border-border transition-colors duration-500 group-hover:border-primary/45 p-2">
              <div className="relative overflow-hidden rounded-[1.45rem] bg-card/40">
                <Image
                  src="/nidhi-portrait.png"
                  alt="Portrait of Nidhi Tank, AI/ML Engineer"
                  width={480}
                  height={560}
                  priority
                  className="aspect-[4/5] w-full portrait-zoom"
                />
                {/* Soft background vignette to integrate portrait */}
                <div className="pointer-events-none absolute inset-0 portrait-vignette mix-blend-multiply" />
                
                {/* Teal/Cyan rim lighting glow overlay */}
                <div className="pointer-events-none absolute inset-0 portrait-glow-overlay opacity-70 mix-blend-screen transition-opacity duration-700 ease-out group-hover:opacity-90" />
                
                {/* Bottom gradient fade to integrate torso with card footer */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 via-background/45 to-transparent" />
              </div>
              <div className="space-y-3 px-3 py-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-foreground">Nidhi Tank</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                    Open to Roles
                  </span>
                </div>
                <div className="rounded-2xl border border-border bg-background/55 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <Radar className="size-3.5 text-primary" />
                      Candidate Overview
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {proofPoints.map((point) => (
                      <div key={point.label} className="flex gap-2 text-xs">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <p>
                          <span className="font-semibold text-foreground">
                            {point.label}:{' '}
                          </span>
                          <span className="text-muted-foreground">
                            {point.value}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          <Sparkles className="absolute -top-3 -right-2 size-6 animate-bounce-slow text-accent" />
          <div className="absolute -bottom-8 -left-8 hidden sm:block">
            <RotatingBadge />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
