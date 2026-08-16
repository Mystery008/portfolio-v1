import { Briefcase, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { experience } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Applied AI work with production habits"
        />

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 80}>
              <div className="relative pb-6">
                <span className="absolute -left-[3.15rem] top-1 flex size-8 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[3.65rem]">
                  <Briefcase className="size-4" />
                </span>
                <div className="glass rounded-3xl border border-border p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </span>
                      {job.type && (
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-medium ${
                            job.type === 'Full-time Employee'
                              ? 'bg-primary/15 text-primary'
                              : 'bg-accent/15 text-accent'
                          }`}
                        >
                          {job.type}
                        </span>
                      )}
                    </div>
                  </div>
                  {job.location && (
                    <p className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {job.location}
                    </p>
                  )}
                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
