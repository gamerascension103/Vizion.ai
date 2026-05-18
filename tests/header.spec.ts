import { test, expect } from '@playwright/test'

const DESKTOP = { width: 1440, height: 900 }
const MOBILE = { width: 375, height: 812 }

const NAV_LINKS = [
  { label: 'Method', href: '/method' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Questions', href: '/questions' },
]

// ─── Desktop homepage header ──────────────────────────────────────────────────

test.describe('Homepage header — desktop (≥720px)', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP)
    await page.goto('/')
  })

  test('Insignia SVG renders in header', async ({ page }) => {
    await expect(
      page.locator('header svg[aria-label="Vizion insignia"]').first()
    ).toBeVisible()
  })

  test('VIZION CORP wordmark is visible', async ({ page }) => {
    const wordmark = page.locator('header').getByText(/VIZION.*CORP/i).first()
    await expect(wordmark).toBeVisible()
  })

  test('brand descriptor "Money leaks, made visible" is visible', async ({ page }) => {
    await expect(
      page.locator('header').getByText('Money leaks, made visible')
    ).toBeVisible()
  })

  test('all four nav links render with correct hrefs', async ({ page }) => {
    for (const link of NAV_LINKS) {
      const el = page.locator(`header a[href="${link.href}"]`).first()
      await expect(el).toBeVisible()
      await expect(el).toHaveText(link.label)
    }
  })

  test('CTA reads exactly "START A CONVERSATION" and routes to /start', async ({ page }) => {
    const cta = page.locator('header a[href="/start"]').first()
    await expect(cta).toBeVisible()
    await expect(cta).toHaveText('START A CONVERSATION')
  })

  test('hamburger button is not visible at desktop width', async ({ page }) => {
    await expect(
      page.locator('header button[aria-label="Open menu"]')
    ).not.toBeVisible()
  })

  test('descriptor and nav row are both present (desktop layout has both)', async ({ page }) => {
    await expect(
      page.locator('header').getByText('Money leaks, made visible')
    ).toBeVisible()
    await expect(
      page.locator('header a[href="/method"]').first()
    ).toBeVisible()
  })
})

// ─── Mobile homepage header ───────────────────────────────────────────────────

test.describe('Homepage header — mobile (≤375px)', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE)
    await page.goto('/')
  })

  test('ceremonial descriptor is hidden on mobile', async ({ page }) => {
    const descriptor = page.locator('header').getByText('Money leaks, made visible')
    await expect(descriptor).not.toBeVisible()
  })

  test('compressed wordmark is visible on mobile', async ({ page }) => {
    const wordmark = page.locator('[data-testid="header-mobile-bar"]').getByText(/VIZION.*CORP/i)
    await expect(wordmark).toBeVisible()
  })

  test('Insignia SVG renders in mobile bar', async ({ page }) => {
    await expect(
      page.locator('[data-testid="header-mobile-bar"] svg[aria-label="Vizion insignia"]')
    ).toBeVisible()
  })

  test('nav links are hidden (behind hamburger)', async ({ page }) => {
    for (const link of NAV_LINKS) {
      await expect(
        page.locator(`header a[href="${link.href}"]`)
      ).not.toBeVisible()
    }
  })

  test('hamburger button is visible', async ({ page }) => {
    await expect(
      page.locator('header button[aria-label="Open menu"]')
    ).toBeVisible()
  })

  test('hamburger opens overlay with all four nav links', async ({ page }) => {
    await page.locator('header button[aria-label="Open menu"]').click()
    for (const link of NAV_LINKS) {
      await expect(page.getByRole('link', { name: link.label })).toBeVisible()
    }
  })

  test('overlay shows "START A CONVERSATION" CTA', async ({ page }) => {
    await page.locator('header button[aria-label="Open menu"]').click()
    await expect(page.getByRole('link', { name: 'START A CONVERSATION' })).toBeVisible()
  })

  test('X button closes the overlay', async ({ page }) => {
    await page.locator('header button[aria-label="Open menu"]').click()
    await expect(page.locator('button[aria-label="Close menu"]')).toBeVisible()
    await page.locator('button[aria-label="Close menu"]').click()
    await expect(page.locator('button[aria-label="Close menu"]')).not.toBeVisible()
    await expect(page.locator('header button[aria-label="Open menu"]')).toBeVisible()
  })

  test('tapping overlay background closes the menu', async ({ page }) => {
    await page.locator('header button[aria-label="Open menu"]').click()
    await expect(page.locator('button[aria-label="Close menu"]')).toBeVisible()
    // Click the overlay div directly (not a nav link or CTA) — bubbles up to parent onClick
    await page.locator('.fixed.inset-0').click({ position: { x: 20, y: 20 }, force: true })
    await expect(page.locator('button[aria-label="Close menu"]')).not.toBeVisible()
  })
})

// ─── Nav link hrefs (desktop) ─────────────────────────────────────────────────

test.describe('Nav link routing', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP)
    await page.goto('/')
  })

  test('Method link href is /method', async ({ page }) => {
    await expect(page.locator('header a[href="/method"]').first()).toHaveAttribute('href', '/method')
  })

  test('About link href is /about', async ({ page }) => {
    await expect(page.locator('header a[href="/about"]').first()).toHaveAttribute('href', '/about')
  })

  test('Pricing link href is /pricing', async ({ page }) => {
    await expect(page.locator('header a[href="/pricing"]').first()).toHaveAttribute('href', '/pricing')
  })

  test('Questions link href is /questions', async ({ page }) => {
    await expect(page.locator('header a[href="/questions"]').first()).toHaveAttribute('href', '/questions')
  })

  test('CTA href is /start', async ({ page }) => {
    await expect(page.locator('header a[href="/start"]').first()).toHaveAttribute('href', '/start')
  })
})
