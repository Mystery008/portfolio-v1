'use client'

import { useEffect, useState } from 'react'

export function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, color-mix(in oklch, var(--primary) 14%, transparent), transparent 70%)`,
      }}
    />
  )
}
