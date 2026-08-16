import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          eyebrow="Education"
          title="Academic foundation"
        />

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.institution + edu.degree} delay={i * 80}>
              <div className="glass rounded-[2rem] border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <GraduationCap className="size-7" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl font-bold tracking-tight">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {edu.degree}
                    </p>
                    {edu.score && (
                      <div className="mt-3">
                        <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-foreground/90">
                          Grade: {edu.score}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
