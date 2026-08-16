'use client'

import { useState } from 'react'
import { BadgeCheck, ChevronDown, ChevronUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { certifications } from '@/lib/portfolio-data'

const VISIBLE_COUNT = 5

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? certifications : certifications.slice(0, VISIBLE_COUNT)

  return (
    <section id="certifications" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          eyebrow="Certifications"
          title="Courses & credentials"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {visible.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="glass flex h-full flex-col rounded-3xl border border-border p-6 transition-colors hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <BadgeCheck className="size-6 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug text-balance">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {certifications.length > VISIBLE_COUNT && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {showAll ? (
                <>
                  <ChevronUp className="size-4" />
                  Show fewer
                </>
              ) : (
                <>
                  <ChevronDown className="size-4" />
                  View all {certifications.length} certifications
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
