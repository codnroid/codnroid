import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getProjectLink } from '../lib/site';
import { getProductionOrigin } from '../lib/seo';

test('contact and production configuration states', () => {
  expect(getProjectLink('')).toEqual({ href: '#contact', external: false });
  for (const url of [
    'https://forms.gle/example',
    'https://docs.google.com/forms/d/e/example/viewform',
  ]) {
    expect(getProjectLink(url)).toMatchObject({
      href: url,
      external: true,
      target: '_blank',
      rel: 'noopener noreferrer',
    });
  }
  for (const url of ['javascript:alert(1)', 'https://example.com', 'not a URL'])
    expect(getProjectLink(url).external).toBe(false);
  for (const origin of [
    '',
    'http://localhost:3000',
    'https://example.com/subpage',
  ])
    expect(getProductionOrigin(origin)).toBeUndefined();
  expect(getProductionOrigin('https://codnroid.example')?.origin).toBe(
    'https://codnroid.example',
  );
});

test('responsive layout, images, anchors and runtime at all target widths', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  for (const width of [375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('We turn ideas');
    const dimensions = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(dimensions.scroll, `overflow at ${width}px`).toBeLessThanOrEqual(
      dimensions.viewport,
    );
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute('href')!)
          .filter((href) => !document.getElementById(href.slice(1))),
      );
    expect(brokenAnchors).toEqual([]);
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('.footer .brand img')).toBeVisible();
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) => (element as HTMLImageElement).naturalWidth,
          ),
        )
        .toBeGreaterThan(0);
    }
    const brokenImages = await page
      .locator('img')
      .evaluateAll(async (elements) => {
        const images = elements.filter(
          (element): element is HTMLImageElement =>
            element instanceof HTMLImageElement,
        );
        await Promise.all(
          images.map((image) => image.decode().catch(() => undefined)),
        );
        return images
          .filter((image) => !image.naturalWidth)
          .map((image) => image.src);
      });
    expect(brokenImages).toEqual([]);
    await page.screenshot({
      path: `test-results/page-${width}.png`,
      fullPage: true,
    });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `test-results/hero-${width}.png` });
  }
  expect(errors).toEqual([]);
});

test('keyboard menu, details, category controls and missing form state', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByText('Skip to content')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await toggle.click();
  await expect(
    page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Services' }),
  ).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Start a Project' })
    .click();
  await expect(page.locator('.mobile-panel')).toHaveCount(0);
  await expect(page.locator('#contact')).toBeFocused();
  await expect(
    page.getByText(
      'Project enquiries are being prepared. These prompts are only for planning; no submission is sent.',
    ),
  ).toBeVisible();
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await question.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute(
    'open',
    '',
  );
  await question.press('Enter');
  await expect(page.locator('.faq-list details').first()).not.toHaveAttribute(
    'open',
  );
  const project = page.locator('.project-details summary').first();
  await project.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.project-details').first()).toHaveAttribute(
    'open',
    '',
  );
  await page.getByRole('button', { name: 'Web & applications' }).click();
  await expect(page.locator('#technology-panel')).toContainText('React');
  await expect(
    page.getByRole('button', { name: 'Web & applications' }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Design & experience' }).click();
  await expect(page.locator('#technology-panel')).toContainText(
    'UI & UX design',
  );

  const process = page.getByRole('tablist', { name: 'Project process' });
  const discover = process.getByRole('tab', { name: /Discover/ });
  const strategy = process.getByRole('tab', { name: /Strategy/ });
  await expect(discover).toHaveAttribute('aria-selected', 'true');
  await discover.press('ArrowRight');
  await expect(strategy).toBeFocused();
  await expect(strategy).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#process-stepper-panel')).toContainText(
    'Strategy',
  );
  await strategy.press('End');
  await expect(process.getByRole('tab', { name: /Grow/ })).toBeFocused();
  await expect(page.locator('#process-stepper-panel')).toContainText('Grow');
  await expect(page.locator('#process-stepper-panel')).toContainText(
    'What we work through',
  );
  await expect(page.locator('#process-stepper-panel')).toContainText(
    'Ongoing product support',
  );

  const contact = page.locator('#contact');
  const startProject = contact.getByRole('button', { name: 'Start a Project' });
  const letsTalk = contact.getByRole('button', { name: "Let's Talk" });
  const starter = contact.getByRole('tablist', {
    name: 'Project starter stages',
  });
  const goals = starter.getByRole('tab', { name: /Goals/ });
  const people = starter.getByRole('tab', { name: /People/ });
  await expect(goals).toHaveAttribute('aria-selected', 'true');
  await expect(contact.locator('#contact-starter-detail')).toContainText(
    'Start with the change',
  );
  await goals.press('ArrowRight');
  await expect(people).toBeFocused();
  await expect(people).toHaveAttribute('aria-selected', 'true');
  await expect(contact.locator('#contact-starter-detail')).toContainText(
    'people and context',
  );
  await people.press('End');
  await expect(starter.getByRole('tab', { name: /Timing/ })).toBeFocused();

  await startProject.focus();
  await startProject.press('Enter');
  await expect(startProject).toHaveAttribute('aria-pressed', 'true');
  await expect(contact.locator('#contact-conversation-panel')).toContainText(
    'Choose a starting point',
  );
  await letsTalk.press('Space');
  await expect(startProject).toHaveAttribute('aria-pressed', 'false');
  await expect(letsTalk).toHaveAttribute('aria-pressed', 'true');
  await expect(contact.locator('#contact-conversation-panel')).toContainText(
    'What happens next',
  );
});

test('accessibility, reduced motion, and indexing defaults', async ({
  page,
  request,
}) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(
    await page
      .locator('.mini-design')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none');
  expect(
    await page
      .locator('.process-detail')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none');
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'index, follow',
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://codnroid.com',
  );
  expect(await (await request.get('/robots.txt')).text()).toContain(
    'Sitemap: https://codnroid.com/sitemap.xml',
  );
  expect(await (await request.get('/sitemap.xml')).text()).toContain(
    '<loc>https://codnroid.com/</loc>',
  );
});

test('dark mode follows system preference, persists, and remains accessible', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(
    page.getByRole('button', { name: 'Switch to light mode' }),
  ).toBeVisible();

  const darkResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(
    darkResults.violations.map((violation) => ({
      id: violation.id,
      nodes: violation.nodes.map((node) => node.target),
    })),
  ).toEqual([]);

  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  expect(
    await page.evaluate(() => localStorage.getItem('codnroid-theme')),
  ).toBe('light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(
    page.getByRole('button', { name: 'Switch to dark mode' }),
  ).toBeVisible();
});
