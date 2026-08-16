'use client'

import {
  useEffect,
  useRef,
  useState,
  type RefObject,
  type ReactNode,
} from 'react'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section'
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const props = {
    className: `reveal ${inView ? 'in-view' : ''} ${className ?? ''}`,
    style: { animationDelay: `${delay}ms` },
  }

  if (Tag === 'li') {
    return (
      <li ref={ref as RefObject<HTMLLIElement | null>} {...props}>
        {children}
      </li>
    )
  }

  if (Tag === 'section') {
    return (
      <section ref={ref} {...props}>
        {children}
      </section>
    )
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement | null>} {...props}>
      {children}
    </div>
  )
}
