import Link from 'next/link'
import { Insignia } from '@/components/brand/Insignia'
import { MobileMenu } from './MobileMenu'

type HeaderProps = {
  variant: 'homepage' | 'inner'
}

const navLinks = [
  { label: 'Method', href: '/method' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Questions', href: '/questions' },
]

function CTAButton() {
  return (
    <Link
      href="/start"
      className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-signal-agent px-[18px] py-[10px] border border-signal-agent rounded-[3px] hover:bg-[rgba(242,179,61,0.08)] hover:text-[#FFD879] transition-colors duration-150 whitespace-nowrap"
    >
      START A CONVERSATION
    </Link>
  )
}

export function Header({ variant }: HeaderProps) {
  if (variant === 'homepage') {
    return (
      <header className="bg-ground">
        {/* Desktop: centered ceremonial block — hidden below 720px */}
        <div data-testid="header-desktop-block" className="max-[720px]:hidden mx-auto max-w-[1200px] px-12 pt-12 pb-5 flex flex-col items-center">
          <Insignia size={72} variant="simplified" />
          <div style={{ height: 20 }} />
          <span className="font-sans font-semibold text-[32px] tracking-[0.34em] pl-[0.34em] text-ink-primary">
            VIZION&nbsp;&nbsp;CORP
          </span>
          <div style={{ height: 10 }} />
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono font-medium text-[9px] tracking-[0.24em] text-signal-agent">
              Money leaks, made visible
            </span>
            <span className="font-mono font-medium text-[9px] tracking-[0.24em] text-ink-tertiary">
              Then watched, so they don&apos;t come back.
            </span>
          </div>
          <div style={{ height: 36 }} />
          <div className="w-full h-px bg-rule-primary" />
          <div style={{ height: 20 }} />
          <div className="w-full flex items-center justify-between">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <CTAButton />
          </div>
        </div>

        {/* Mobile: compressed bar — hidden above 720px */}
        <div data-testid="header-mobile-bar" className="hidden max-[720px]:flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Insignia size={28} variant="simplified" />
            <span className="font-sans font-semibold text-[14px] tracking-[0.22em] pl-[0.22em] text-ink-primary">
              VIZION&nbsp;&nbsp;CORP
            </span>
          </div>
          <MobileMenu />
        </div>
      </header>
    )
  }

  return (
    <header
      className="sticky top-0 z-50 bg-[rgba(11,13,17,0.85)] backdrop-blur"
    >
      <div className="mx-auto max-w-[1200px] px-12 py-5 flex items-center max-[720px]:px-5 max-[720px]:py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Insignia size={32} variant="simplified" className="max-[720px]:hidden" />
          <Insignia size={28} variant="simplified" className="hidden max-[720px]:block" />
          <span className="font-sans font-semibold text-[18px] tracking-[0.28em] pl-[0.28em] text-ink-primary max-[720px]:text-[14px] max-[720px]:tracking-[0.22em] max-[720px]:pl-[0.22em]">
            VIZION&nbsp;&nbsp;CORP
          </span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-6 max-[720px]:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton />
        </div>

        <div className="hidden max-[720px]:block">
          <MobileMenu />
        </div>
      </div>
      <div className="w-full h-px bg-rule-primary" />
    </header>
  )
}
