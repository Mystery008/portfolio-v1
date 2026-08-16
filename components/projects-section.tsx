import Image from 'next/image'
import type { ComponentType } from 'react'
import { ArrowUpRight, GitBranch, Layers3, Sparkles, Target } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Case studies recruiters can scan"
        />

        <Reveal>
          <article className="glass group overflow-hidden rounded-[2rem] border border-border transition-colors hover:border-primary/50">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden border-b border-border lg:border-r lg:border-b-0">
                <Image
                  src={featured.image || '/placeholder.svg'}
                  alt={`${featured.title} screenshot`}
                  width={720}
                  height={540}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-3.5 text-white backdrop-blur-md">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/70">
                    Featured Project
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    Vehicle Insurance Cross-Sell Prediction
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                  <Sparkles className="size-3.5" />
                  Featured Project
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-balance">
                  {featured.title}
                </h3>

                <div className="mt-5 grid gap-3">
                  <CasePoint icon={Target} label="Problem" text={featured.problem} />
                  <CasePoint icon={Layers3} label="Built" text={featured.build} />
                  <CasePoint
                    icon={GitBranch}
                    label="Takeaway"
                    text={featured.takeaway}
                  />
                </div>

                {featured.pipeline && (
                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Pipeline
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featured.pipeline.map((step, index) => (
                        <span
                          key={step}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/45 px-3 py-1.5 font-mono text-xs"
                        >
                          <span className="text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                  View Repository
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="relative overflow-hidden border-b border-border">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} screenshot`}
                    width={640}
                    height={400}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-balance">
                    {project.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    <MiniCase label="Problem" text={project.problem} />
                    <MiniCase label="Built" text={project.build} />
                    <MiniCase label="Takeaway" text={project.takeaway} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    <GithubIcon className="size-4" />
                    View Repository
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CasePoint({
  icon: Icon,
  label,
  text,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/45 p-4">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-primary" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  )
}

function MiniCase({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
