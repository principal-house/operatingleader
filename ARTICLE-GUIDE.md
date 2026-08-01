# ARTICLE-GUIDE.md — How We Write OperatingLeader Articles

> The structural playbook for blog articles at operatingleader.com. This is the
> **"how an article is built"** companion to [VOICE.md](VOICE.md) (how it *sounds*),
> [BRAND.md](BRAND.md) (how it *looks*), [FACTS.md](FACTS.md) (career specifics you may
> cite), and [ILLUSTRATIONS.md](ILLUSTRATIONS.md) (article visuals).
>
> **Order of operations when drafting:** read VOICE.md → draft against this guide → pull
> any Pipedrive/Mailigen/Aerones specific from FACTS.md → run the pre-publish checklist
> at the bottom → follow [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) to ship.
>
> This guide is derived from the 11 articles already live in `src/content/blog/`. It
> describes what actually works for this voice and audience, not a generic blog template.

---

## 0. Should we write this at all? (the topic gate)

Before structure, before drafting, run the topic through three questions. If it fails any
one, change the topic or the angle. This is the filter that produced the existing corpus.

1. **Do you credibly own it?** Is there a real scar or operating moment from Mailigen,
   Pipedrive, or Aerones behind it? If the lesson isn't lived, it reads as borrowed
   thought leadership. No invented authority.
2. **Who does it help, specifically?** Name the reader (founder hitting 40 people, VP
   Product restructuring for AI, CEO losing a key hire). If you can't name them, the piece
   has no audience.
3. **Which job does it do?** Build trust with that reader, or move them toward the
   playbook. If neither, cut or reshape it.

The decision rule is never *"what topic is trending?"* It's *"what hard-earned lesson do I
credibly own, and who does it help?"* Trend-chasing, SEO sludge, and abstract management
theory all fail the gate.

---

## 1. What an OperatingLeader article is

A first-person operating lesson from someone who ran the companies (Mailigen, Pipedrive,
Aerones), told through a real moment and turned into a framework the reader can use on
Monday. Every piece earns authority from lived experience, not citations.

**The job of every article (one or both):**
1. Move a reader toward the **$29 playbook** (or a related deliverable), or
2. **Build the audience** of founders, CEOs, HR leaders, and product/eng leaders.

If a draft does neither, it's a journal entry. Rework it or kill it.

**Audience:** founders, CEOs, HR leaders, product/eng leaders. Smart, busy, allergic to
fluff. They've read the LinkedIn-guru version of your topic already. Your edge is the
specific number, the named failure, the system you actually ran.

---

## 2. Length

**Target: 1,500–2,400 words.** That's where the live corpus sits (median ~2,000).

- **~1,400 words** is the floor — fine for a single sharp idea (see
  `why-your-best-people-leave-without-warning.md`).
- **~2,800 words** is the ceiling — only when the framework genuinely needs the room
  (see `when-everyone-can-build-what-does-a-product-leader-actually-do.md`).
- Don't pad to hit a number. A tight 1,500 beats a baggy 2,400.

> Note: VOICE.md's "800–1500 words" line predates the current corpus and is too short for
> long-form articles. Use the 1,500–2,400 target here for blog articles; VOICE.md still
> governs short-form (LinkedIn, X, outreach).

---

## 3. The structural template

Eight of the eleven articles follow this arc. Use it as a default, not a straitjacket.

```
1. OPEN          A real moment + the stakes              (~150–250 words, no header)
2. FRAME         Name the problem / the gap / the trap   (1 section)
3. REFRAME       The contrarian turn — "here's what's    (1 section)
                 actually going on"
4. FRAMEWORK     The system, numbered or tiered          (1–3 sections, the core)
5. EVIDENCE      Real examples from Mailigen/Pipedrive/  (woven in, or its own section)
                 Aerones; outside voices if relevant
6. NUANCE        Handle the obvious objection            (optional, 1 section)
7. START HERE    The smallest first step                 (1 section)
8. CLOSE         Reframe as a principle + CTA            (~50–75 words + footer)
```

**Section count:** 5–8 H2 headers. Most articles land at 6–7. Nest H3s only when a
framework has named parts (the four links, the five signals, the four hats). Never go
deeper than H3.

---

## 4. Openers (the most important 200 words)

Lead with the feeling or the moment, never the topic. The two proven patterns:

**A. The scene** — drop the reader into a specific moment, then widen out.
> "I caught myself doing it in the spring of 2014. Mailigen, Riga office, a Wednesday
> afternoon. I was rewriting the annual plan I'd built three months earlier..."

> "Fall 2025. I watched our applied AI engineer rebuild an internal tool from scratch in
> a couple of weeks. A tool that replaced a third-party vendor solution costing us
> €100,000 a year. One engineer. Done."

**B. The principle + the scar** — state the hard-won truth, then show where it came from.
> "Here's something I learned the expensive way: your best people never leave suddenly.
> It just feels sudden because you weren't reading the signals."

> "I spent over 10 years building Mailigen without a system... from the outside it looked
> like we knew what we were doing. We didn't. We were winging it."

**Rules for openers:**
- A real number, place, or date in the first three sentences (€100K, 40 people, spring 2014).
- No throat-clearing. No "In today's fast-moving world." No defining the term first.
- The opener should make a busy reader think *"wait, that's me"* by sentence three.

---

## 5. Sections & headers

Headers should read like a story spine on their own. Skim the headers and you should get
the argument. Proven header styles (mix them):

- **Problem-naming:** "The problem nobody solves", "The invisible wall", "The two-link trap"
- **Directive:** "What actually breaks", "What to build instead", "How to launch the program"
- **Framework label:** "The four links", "Three tiers of building", "Four hats"
- **Contrarian/rhetorical:** "What a Product Builder actually is", "The cascade most leaders skip"
- **Metaphor (sparingly):** "The kings and queens", "Chaos without meaning"
- **The landing:** end on a "Where to start" / "Start before you need to" / "The bottom line"

Avoid generic headers ("Introduction", "Conclusion", "Key takeaways", "Background").

---

## 6. Formatting

The house style is **prose-led with structure for the framework**, not a listicle.

- **Numbered lists** for steps, tiers, and signals. Keep each list to **3–6 items**.
  Each item gets a bold label + a sentence or two. (e.g. "**1. Energy withdrawal.** ...")
- **Bulleted lists** for elaboration and examples under a point. Don't stack bullets where
  prose would carry the rhythm better.
- **Bold** for the label that opens a framework item and for the occasional key line.
- **Italics** for the one isolated, quotable line (*Does this trace up?*) and for the
  footer CTA. Max one italic pull-line per piece.
- **Tables:** essentially never used in articles. Don't start now unless a comparison
  genuinely demands a grid.
- **Outside voices:** quote named operators/execs inline (not as block quotes) when the
  piece is making a "this isn't just me" argument. Two to five per long article, max.
- **Images:** hero image optional (~45% of posts have one). If you add one, follow
  [ILLUSTRATIONS.md](ILLUSTRATIONS.md) and put files in `public/images/`, referenced by
  absolute path (`/images/foo.png`). Set `heroImage` + `heroAlt` in frontmatter.

Apply the [VOICE.md](VOICE.md) punctuation rule everywhere: **no em-dashes or en-dashes.**

---

## 7. Closings

Two parts: the **landing line**, then the **footer CTA**.

**Landing line (~50–75 words):** reframe the whole piece as one principle or one
imperative. Make the last sentence quotable.
> "PE didn't kill my founder spirit. It gave it structure. And structure, it turns out, is
> what lets you do bigger things."

> "Don't wait for the crisis that forces it. By then, you've already lost people you didn't
> need to lose."

> "Ambiguity about expectations kills programs. Clarity builds capability."

**Footer CTA (italic, choose by article type):**

- **Default / audience-building:** point to the newsletter.
  > *This article is the long-form version of an issue of [The Operating Note](https://www.operatingleader.com/subscribe), bi-weekly, ~5-minute read, one operating insight at a time.*

- **Playbook-adjacent (the article describes a system you packaged):** offer the deliverable.
  > *This is the operating model I built at Aerones. I'm sharing the full playbook, operating loop templates, quality gate checklists, and decision rights matrix. DM me on LinkedIn or reach out at operatingleader.com.*

- **Part of a series:** add a one-line teaser of the next piece, then the CTA.

**CTA rules:** easy, never pushy (VOICE.md). Don't quote the "$29" price in the article
body, refer to "the full playbook" and let the playbook page sell. Don't mention revenue
figures or UnsaidSignals (CLAUDE.md "do not mention" list).

---

## 8. Frontmatter spec

Schema lives in [src/content.config.ts](src/content.config.ts). Use this for every new
article (we're standardizing on the fuller form, several older posts omit author/tags,
don't copy that):

```yaml
---
title: "Sharp, specific, often a contrarian claim or a named concept"
description: "The meta description — see rules below"
pubDate: 2026-06-19
author: "Jānis Rozenblats"
tags: ["leadership", "product management", "..."]   # 4–5 tags
heroImage: "/images/slug-hero.png"                  # optional
heroAlt: "Describe the image"                       # only if heroImage set
updatedDate: 2026-07-01                             # only on meaningful edits
---
```

- **title:** name the idea ("The Citizen Builder", "The Value Creation Stack") or stake a
  claim ("Your PM/Designer/Engineer Trio Is Already Dying"). Title Case.
- **description / meta:** 1–2 sentences, ~120–160 chars. State the contrarian premise and
  the payoff, written for the search/social snippet, not as a summary. Example:
  > "Most companies obsess over growth before they install the layers that make growth
  > sustainable. Here is the value creation stack that actually compounds."
- **tags:** 4–5, lowercase, mixing a topic tag ("leadership", "product management"), a
  model/concept tag ("product builder", "operating systems"), and a function tag
  ("team-building", "execution"). Reuse existing tags before inventing new ones.
- **slug:** the filename is the slug. Keep it lowercase, hyphenated, and descriptive. Only
  set an explicit `slug` field if you need it to differ from the filename.

---

## 9. SEO & distribution (don't skip)

Per CLAUDE.md output expectations, a finished article ships with:

1. **Meta description** (the `description` frontmatter, per §8).
2. **3 social post variants** — written per-platform, not one post resized
   (see VOICE.md platform calibration): LinkedIn (hook + insight + CTA, <1300 chars,
   link in first comment), X thread (idea-per-tweet), Facebook (more emotional, 150–200 words).
3. **A distribution plan** — where it goes, in what order, and which line is the hook for each.

Front-load the keyword/concept into the title and first 100 words. One clear concept per
article so it's linkable and searchable.

---

## 10. The series pattern

Several articles form an AI-transformation series (Product Builder → Citizen Builder →
"what does a product leader do" → the identity-crisis piece). When writing inside a series:
- End with a one-line teaser of the next installment before the CTA.
- Reuse the shared vocabulary consistently (Product Builder, Citizen Builder, the 15× math).
- Each piece must still stand alone for a reader who lands cold from search.

---

## 11. Pre-publish checklist

Voice & structure:
- [ ] Read VOICE.md; draft passes the read-aloud test (sounds like Jānis over coffee).
- [ ] **Zero em-dashes / en-dashes.** Search the file to confirm.
- [ ] No banned words (delve, robust, leverage-as-verb, journey, etc. — VOICE.md table).
- [ ] Opener leads with a moment/principle + a real number, place, or date. No throat-clearing.
- [ ] 5–8 headers that read as a story spine; framework is numbered/tiered (3–6 items each).
- [ ] At least one screenshot-worthy quotable line.
- [ ] At most one "It's not X, it's Y" reframe, and it's grounded in a specific (VOICE.md "Ration the reframe"). Closer doesn't repeat the last article's reversal.
- [ ] Landing line reframes the piece as a principle; footer CTA matches article type.
- [ ] Every career specific traced to FACTS.md (no invented numbers/dates).
- [ ] 1,500–2,400 words (1,400 floor, 2,800 ceiling).
- [ ] Does not mention revenue figures, the "$29" price in-body, or UnsaidSignals.

Mechanics:
- [ ] File is `src/content/blog/<slug>.md` (this is the source of truth).
- [ ] Frontmatter complete per §8 (title, description, pubDate, author, tags; heroImage+heroAlt if used).
- [ ] Images (if any) in `public/images/`, referenced by absolute path.
- [ ] Meta description + 3 platform social posts + distribution plan delivered.
- [ ] `npm run check:publish` passes (build + verify) before deploy. See README.md.
```
