import { test, expect } from '@playwright/test'

// ─── Page structure ───────────────────────────────────────────────────────────

test.describe('Homepage structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page title is "Vizion Corp AI"', async ({ page }) => {
    await expect(page).toHaveTitle('Vizion Corp AI')
  })

  test('Hero section renders with main landmark', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible()
  })

  test('Hero hook pivot line is visible', async ({ page }) => {
    await expect(page.getByText('The bleed has a number.')).toBeVisible()
  })

  test('Hero eyebrow contains product names', async ({ page }) => {
    const eyebrow = page.getByText(/THE X-RAY.*THE COMMAND DECK.*WATCHDOG/i).first()
    await expect(eyebrow).toBeVisible()
  })

  test('Pain section heading renders', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /You can feel it/ })
    ).toBeVisible()
  })

  test('Pain section eyebrow "The problem" renders', async ({ page }) => {
    await expect(page.getByText('The problem')).toBeVisible()
  })

  test('X-Ray Guarantee copy is present', async ({ page }) => {
    await expect(
      page.getByText(/If The X-Ray doesn't surface money leaks/i)
    ).toBeVisible()
  })

  test('primary CTA "START A CONVERSATION" is present in hero', async ({ page }) => {
    const cta = page.locator('main').getByRole('button', { name: 'START A CONVERSATION' })
    await expect(cta).toBeVisible()
  })
})

// ─── Retired vocabulary audit ─────────────────────────────────────────────────

test.describe('Retired vocabulary — zero matches in visible text', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('no "Captain\'s Method" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain("captain's method")
  })

  test('no "four-phase" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain('four-phase')
  })

  test('no "Request Briefing" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain('request briefing')
  })

  test('no "See What We Find" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain('see what we find')
  })

  test('no "Air Force" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain('air force')
  })

  test('no "ops-risk-dashboard" in page text', async ({ page }) => {
    const body = (await page.locator('body').textContent()) ?? ''
    expect(body.toLowerCase()).not.toContain('ops-risk-dashboard')
  })
})

// ─── Forbidden vocabulary audit ───────────────────────────────────────────────

test.describe('Forbidden vocabulary — zero matches in visible text', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  const forbidden = [
    'transform',
    'unlock',
    'operationalize',
    'leverage',
    'empower',
    'AI-powered',
    'seamless',
    'robust',
    'cutting-edge',
    'revolutionize',
    'democratize',
  ]

  for (const word of forbidden) {
    test(`no "${word}" in visible page text`, async ({ page }) => {
      // Check visible text only (textContent includes hidden elements; innerText is visible only)
      const visibleText = await page.locator('body').innerText()
      expect(visibleText.toLowerCase()).not.toContain(word.toLowerCase())
    })
  }
})

// ─── Responsive — no horizontal overflow ─────────────────────────────────────

test.describe('No horizontal overflow at key breakpoints', () => {
  const viewports = [
    { name: '380px', width: 380, height: 812 },
    { name: '720px', width: 720, height: 1024 },
    { name: '1024px', width: 1024, height: 768 },
    { name: '1440px', width: 1440, height: 900 },
  ]

  for (const vp of viewports) {
    test(`no horizontal scroll at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height })
      await page.goto('/')
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth)
    })
  }
})
