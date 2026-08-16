'use client'

import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { CheckCircle2, Download, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'in/nidhitank',
      href: profile.linkedin,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/nidhitank',
      href: profile.github,
    },
  ]

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Get in touch"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="lab-panel rounded-2xl border border-border p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  Open to
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Entry-level and junior roles in AI/ML engineering, data
                  engineering, and software engineering. Happy to discuss graduate programmes or full-time positions.
                </p>
              </div>
            </Reveal>

            {channels.map((c, i) => (
              <Reveal key={c.label} delay={(i + 1) * 70}>
                <a
                  href={c.href}
                  target={c.label === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-primary/50"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {c.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-[2rem] border border-border p-6 sm:p-8"
            >
              {sent ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-12 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    Message ready
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Thanks for reaching out. I will get back to you as soon as I
                    can.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </Field>
                  </div>
                  <Field label="Message">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell me about the role, team, or ML problem..."
                      className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Send className="size-4" />
                    Send message
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
