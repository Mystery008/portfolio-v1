import { BrainCircuit, CloudCog, LineChart, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Build',
    body: 'Work on supervised ML tasks — data prep, training with Scikit-Learn, and measuring model performance with standard metrics.',
  },
  {
    icon: CloudCog,
    title: 'Track',
    body: 'Log experiments with MLflow and version datasets with DVC so results are reproducible and easy to compare.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    body: 'Serve models via FastAPI, containerise with Docker, and automate testing pipelines with GitHub Actions.',
  },
  {
    icon: LineChart,
    title: 'Analyse',
    body: 'Use Pandas and Matplotlib to explore data, and Power BI to build dashboards — practised during my analytics internship.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Computer Engineering graduate focused on AI/ML"
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div className="lab-panel rounded-[2rem] border border-border p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                Introduction
              </p>
              <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
                <p>
                  I&apos;m a Computer Engineering graduate from{' '}
                  <span className="text-foreground">
                    L.D. College of Engineering
                  </span>
                  {' '}with a CGPA of 8.71. During my degree I got interested
                  in AI/ML and spent my last two years building projects and
                  picking up practical skills through coursework and internships.
                </p>
                <p>
                  I enjoy working on problems that involve data, automation, and building applications that turn models into useful tools.
                </p>
                <p>
                  I completed a 6-month on-site internship at{' '}
                  <span className="text-foreground">Impero IT Services</span>
                  {' '}where I worked on ML features and backend development.
                  Before that, a 2-week summer programme at Infolabz introduced
                  me to data analytics and Power BI in a work setting.
                </p>
                <p>
                  I&apos;m currently continuing at Impero as a Software Engineer
                  Trainee. I&apos;m actively looking for roles in AI/ML,
                  software engineering, or data engineering where I can
                  contribute and keep growing.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="glass group h-full rounded-3xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
