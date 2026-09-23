---
title: "Accessibility"
description: "What I've done to make this site accessible, how I tested it, what's still missing, and how to tell me about a problem."
date: 2026-09-24
---

I want this site to be usable by everyone, including people who use a keyboard, a screen reader, zoom or high-contrast settings. I aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.

## What's in place

- Every page starts with a "Skip to main content" link, and everything works with a keyboard alone. You can always see where the keyboard focus is.
- Text meets WCAG AA contrast in both the light and dark themes. Body text contrast is about 14.7:1.
- Links inside text are underlined, so they don't depend on colour.
- Images have text descriptions. Pages use real headings, lists and landmarks.
- The layout reflows down to 320px wide without sideways scrolling, and text can be zoomed.
- There's a light and dark theme, which follows your system setting, and a separate high-contrast mode on the homepage.
- If your system asks for reduced motion, smooth scrolling is turned off.
- There are no single-key keyboard shortcuts that could clash with assistive technology.

## How I tested it

On 24 September 2026 I checked every page with the automated tool axe-core against WCAG 2.0, 2.1 and 2.2 A and AA rules, in light and dark themes, at phone and desktop widths. It found no issues. I also checked keyboard order, focus, reflow at 320px and colour contrast by hand.

## What's not covered yet

- I haven't tested the site with people who use screen readers or other assistive technology day to day. Automated tools catch only some problems.
- Some links go to other services I don't control: FormSubmit for the note form, DePay for support, Google Docs for the handbook, and Substack. Their accessibility is up to them.

## Tell me about a problem

If something on this site doesn't work for you, email me at {{< email >}}. Tell me the page and what went wrong, and I'll fix it or send you the content in a form that works for you.
