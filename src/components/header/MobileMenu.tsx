'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Method', href: '/method' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Questions', href: '/questions' },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center gap-[5px] w-6 h-6"
      >
        <span className="block w-full h-[1.5px] bg-ink-secondary" />
        <span className="block w-full h-[1.5px] bg-ink-secondary" />
        <span className="block w-full h-[1.5px] bg-ink-secondary" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-ground flex flex-col"
          style={{ animation: 'mobile-menu-fade 200ms ease-out both' }}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 p-1"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8A8F99" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>

          <nav
            className="flex-1 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[24px] font-semibold text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="pb-12 flex justify-center"
          >
            <Link
              href="/start"
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-signal-agent px-6 py-3 border border-signal-agent rounded-[3px]"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
