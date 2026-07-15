import type { CSSProperties } from 'react'

export const editableRootStyle = {
  // Yelp-style system: clean white surfaces, signature red accent, hairline
  // gray borders, near-black text. Flat (no gradients), generous and premium.
  '--slot4-page-bg': '#FFEED6',
  '--slot4-page-text': '#423923',
  '--slot4-panel-bg': '#f7dfc2',
  '--slot4-surface-bg': '#fffaf2',
  '--slot4-muted-text': '#716344',
  '--slot4-soft-muted-text': '#8c7c5b',
  '--slot4-accent': '#827148',
  '--slot4-accent-fill': '#827148',
  '--slot4-accent-soft': '#e5e4c3',
  '--slot4-on-accent': '#fff8ec',
  '--slot4-dark-bg': '#4b432c',
  '--slot4-dark-text': '#FFEED6',
  '--slot4-media-bg': '#eadfc7',
  '--slot4-cream': '#FFEED6',
  '--slot4-warm': '#f7dfc2',
  '--slot4-lavender': '#e4e6c9',
  '--slot4-gray': '#eee4d0',
  '--slot4-body-gradient': 'none',
  '--editable-page-bg': '#FFEED6',
  '--editable-page-text': '#423923',
  '--editable-container': '1220px',
  '--editable-border': '#d8c9a8',
  '--editable-nav-bg': '#827148',
  '--editable-nav-text': '#FFEED6',
  '--editable-nav-active': '#E8A07C',
  '--editable-nav-active-text': '#392f1c',
  '--editable-cta-bg': '#E8A07C',
  '--editable-cta-text': '#392f1c',
  '--editable-search-bg': '#fffaf2',
  '--editable-footer-bg': '#827148',
  '--editable-footer-text': '#FFEED6',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  onAccentText: 'text-[var(--slot4-on-accent)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_1px_3px_rgba(0,0,0,0.08)]',
  shadowStrong: 'shadow-[0_4px_18px_rgba(0,0,0,0.12)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-xs font-semibold uppercase tracking-[0.28em] text-[var(--slot4-accent)]',
    heroTitle: 'text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]',
    sectionTitle: 'text-3xl font-semibold tracking-[-0.02em] sm:text-4xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `border ${editablePalette.border} ${editablePalette.panelBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--slot4-accent-fill)] px-6 py-3 text-sm font-bold tracking-[0.01em] text-[var(--slot4-on-accent)] transition duration-200 hover:brightness-95 active:scale-[0.98]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] px-6 py-3 text-sm font-bold tracking-[0.01em] text-[var(--slot4-page-text)] transition duration-200 hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] active:scale-[0.98]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-lg ${editablePalette.accentBg} px-6 py-3 text-sm font-bold text-[var(--slot4-on-accent)] transition duration-200 hover:brightness-95 active:scale-[0.98]`,
  },
  media: {
    frame: `relative overflow-hidden rounded-xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
