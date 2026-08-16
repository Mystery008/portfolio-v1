import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            AI/ML Engineer · MLOps · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-center font-mono text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  )
}
