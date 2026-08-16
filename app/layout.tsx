import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nidhi Tank - AI/ML Engineer & MLOps',
  description:
    'Portfolio of Nidhi Tank, AI/ML Engineer and MLOps enthusiast building production-ready machine learning systems that scale from experimentation to production.',
  keywords: [
    'Nidhi Tank',
    'AI Engineer',
    'ML Engineer',
    'MLOps',
    'Machine Learning',
    'Computer Engineering',
    'Data Analytics',
    'Portfolio',
  ],
  authors: [{ name: 'Nidhi Tank' }],
  openGraph: {
    title: 'Nidhi Tank - AI/ML Engineer & MLOps',
    description:
      'Building AI systems that scale from experimentation to production.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');localStorage.setItem('theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
