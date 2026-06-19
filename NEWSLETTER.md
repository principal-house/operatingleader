# NEWSLETTER.md — The Operating Note (production playbook)

> The production playbook for **The Operating Note**, the bi-weekly newsletter for
> operatingleader.com. When asked to draft an issue, follow this end to end. Voice rules
> live in [VOICE.md](VOICE.md); brand/visual rules in [BRAND.md](BRAND.md); site context
> in [CLAUDE.md](CLAUDE.md).
>
> **This file is the orchestration layer. Notion is the content.** The editorial roadmap,
> brief, master HTML template, and PS variants live in the two Notion pages below. If
> either evolves, only Notion needs updating. This doc just tells me how to drive them.

---

## When to use this

Use this playbook when Jānis asks to:
- "Draft the next Operating Note" / "Write Issue #00X"
- "Let's build the newsletter for [topic]"
- "Draft this Sunday's newsletter" / "Build the bi-weekly"
- Anything referencing The Operating Note, the bi-weekly newsletter, or the
  operatingleader.com newsletter.

Do NOT use it for:
- Blog articles for operatingleader.com → use [VOICE.md](VOICE.md) + content knowledge.
- LinkedIn posts → use [VOICE.md](VOICE.md).
- Newsletter strategy / editorial discussion → just discuss directly, no playbook needed.

---

## Sent Log (single source of truth for what shipped)

Read this BEFORE picking an issue number or a PS variant. Without it, every session guesses
at the next issue number and which PS comes next, and two sessions will disagree. Update this
table the moment an issue is scheduled/sent.

| #   | Sent date    | Topic                                    | PS variant       | Read-more slug |
|-----|--------------|------------------------------------------|------------------|----------------|
| 001 | Apr 25, 2026 | The 1:1 you thought went well            | Playbook         | why-your-best-people-leave-without-warning |
| 002 | May 9, 2026  | Why your January plan died (the cascade) | Reply (inferred) | the-cascade-most-leaders-skip |
| 003 | May 20, 2026 | The trio is dying. What's replacing it.  | Poll (inferred)  | when-everyone-can-build-what-does-a-product-leader-actually-do |
| 004 | Jun 4, 2026  | When nobody pushes back                  | Playbook (inferred) | [CONFIRM slug] |
| 005 | Jun 19, 2026 | The Pipedrive lesson: scoring by S-Fit (S-Fit, A–D) | Reply | what-pe-taught-me-about-product-management |

> Send dates #001–004 confirmed from Mautic. PS variants for #002–004 are inferred from the
> roadmap, confirm if you remember differently. Next issue number = last sent row + 1.

---

## Step 1 — Always load both Notion pages first

Before drafting anything, read these two pages. They are the source of truth.

**📰 The Operating Note — Newsletter Brief & Issue #001**
https://www.notion.so/34df4c6036cf819a8090f7e6904ae862
Contains: editorial brief, format principles, sign-off, the 11-issue editorial roadmap
(next topics + angles), Issue #001 as a quality reference.

**📰 The Operating Note — Build & Send Guide**
https://www.notion.so/34df4c6036cf816389fec37dbd65d353
Contains: master HTML template, the editable sections, four rotating PS variants
(Playbook / Reply / Forward / Poll), the Mautic Custom HTML workflow, brand tokens.

> Notion is reached via the Notion MCP tools (`notion-fetch` / `notion-search`). If those
> aren't connected in this session, say so and ask Jānis to paste the template + roadmap
> rather than guessing at them.

---

## Step 2 — Pick the topic

Default: take the next topic from the editorial roadmap in the Brief page. If Jānis
specified a topic, use his.

If picking from the roadmap, confirm in one line before drafting:
"Drafting #00X on [topic], confirm or pick differently?" After confirm, proceed.

---

## Step 3 — Compose in Jānis's voice

Apply [VOICE.md](VOICE.md) to ALL body copy. Warm, direct, operator-grounded,
first-person. Specific company + year names (Pipedrive, Mailigen, Aerones). No corporate
voice. (Skipping this is the #1 failure mode, it makes the output sound like every other
LinkedIn coach.)

**Pull operator specifics from [FACTS.md](FACTS.md) first.** If a detail you need isn't there
and the story needs it, invent a plausible one rather than blocking, but mark it
`[INVENTED — confirm]` inline and list every invented/uncertain specific at the end of the
draft so Jānis can correct them in one pass. Two hard rules survive: a story mechanic MUST
match the artifact in the same issue (story grades "A to D" → artifact grades "A to D"), and
never publish a do-not-mention item. Hedgy phrasing ("during my time leading part of the…")
is a tell that a fact is missing, use a real one or a marked invented one instead.

---

## Step 4 — Apply the 8-section format strictly

Every issue follows this structure. No deviations except one-off announcements (which
should be separate emails, not modifications to the format).

1. **Subject line** — max 50 chars. Declarative, curiosity-creating, no clickbait.
2. **Preheader** — max 90 chars. The dek. Sells the open after the subject lands.
3. **THE SITUATION** — universal opener. Any function leader (sales, ops, marketing, eng)
   must recognize the moment. If a sales VP can't picture themselves in it, rewrite.
4. **WHAT MOST LEADERS DO** — the default trap. Often a stat or a named pattern.
5. **WHAT ACTUALLY WORKS** — the contrarian/harder answer. Operator story with specific
   company + year. ("At Aerones in March 2026 we..." beats "In my experience leaders
   should...").
6. **THE ARTIFACT** — 5 named items in a save-able card (questions / rules / steps /
   template fields). The thing readers screenshot. Bar: it must be **usable without the
   email body** (a reader who only saw this card could act on it). When the framework is
   universal, show it **applied to 3-4 concrete domains** (customers / projects / hires /
   partnerships) instead of one generic list, that proves the universality and is far more
   forward-able. Close with a do-it-now nudge ("Run it on your top 20. 90 minutes.").
7. **ONE LINE TO STEAL** — the takeaway distilled. Quotable. Forward-able.
8. **READ MORE** — link to a relevant article on operatingleader.com/blog (see
   `src/content/blog/` for what's published).
9. **PS** — rotating per issue (see Step 5).
10. **Sign-off** — always "Systems set you free. — JR" (never change).
11. **Footer** — never change.

---

## Step 5 — Rotate the PS

**Precedence (settled): the roadmap's per-issue CTA wins.** Each of the 11 roadmap entries
in the Brief names a CTA (e.g. #005 → reply prompt). Use that. The rotation cycle below is
only the **fallback** when the roadmap doesn't specify a CTA for an issue.

Fallback cycle: **Playbook → Reply prompt → Forward request → Poll → Playbook → ...** Check
the **Sent Log** (above) for the previous issue's PS to know which comes next. Never run two
Playbook pitches in a row. Use Playbook only when the issue's content has a natural
team-health hook (1:1 signals, trust breakdown, scaling pain, etc.).

The four PS variants and their HTML are in the Build & Send Guide, use the right one's HTML
and fill in body specific to this issue.

---

## Step 6 — Output in this exact order

1. **Issue meta** (1-2 lines) — issue number, topic, target read time, PS variant chosen,
   suggested send date.
2. **Plain-text version** — the 8 content sections as plain text so Jānis can review/edit
   before HTML.
3. **Ready-to-paste HTML** — the master template (from the Build & Send Guide) with
   content slotted in. Goes straight into Mautic Code Mode.

Jānis edits in plain text first, then re-requests HTML if changes are significant. Always
be ready to regenerate the HTML after content edits.

---

## Editorial principles (non-negotiable)

- **Specific story, universal insight.** Open universal, prove with a specific operator
  story, close universal.
- **One thing, not five.** Each issue makes one point. A second insight becomes the next
  issue.
- **Name frameworks where natural.** Three- to five-word frameworks stick (e.g. "Status
  check vs signal check"). Don't force a name, coin one when natural.
- **First-person operator failures > general experience.** Specific scars (Mailigen
  25-person breakdown, Pipedrive PE transition, Aerones AI restructure) beat generic
  advice every time.
- **No corporate voice.** No "stakeholders," "synergies," "leverage" as a verb, "drive
  value." Talk like Jānis would talk to a peer at dinner.
- **Forward-worthy is the bar.** Would a reader send this to their VP of Sales? If no,
  rewrite.
- **Light to read, heavy to ignore.** ~400 words body. Finishable in 4-5 minutes in a
  coffee line, but leaves the reader slightly uncomfortable about something they're doing
  wrong.

---

## Punctuation rule (HARD)

Same rule as [VOICE.md](VOICE.md): never use em-dashes (—) or en-dashes (–) in body copy.
Replacement hierarchy: comma → period → parentheses → ellipses (max one per piece).
Hyphens only for compound words ("founder-to-exec", "AI-native", "go-to-market").

**One canonical exception:** the fixed sign-off "Systems set you free. — JR" keeps its
dash because it never changes. Don't introduce any other dashes.

---

## What never changes

- Sign-off: "Systems set you free. — JR"
- Footer: "The Operating Note · A bi-weekly note from operatingleader.com" +
  unsubscribe/webview
- The 8-section format
- Cadence: **every other Friday, 8:00 AM Riga time** (switched from Sunday as of Issue #005)
- **The read-time line always ends "· Friday edition"** — fixed regardless of the day you
  draft. The send is always Friday, so the label is always Friday.
- **Issue number must equal the last Sent Log row + 1.** Don't infer it from the roadmap.
- Always Custom HTML mode in Mautic, never the GrapesJS Builder

---

## Common mistakes to avoid

- Outputting markdown instead of HTML → Jānis needs HTML to paste into Mautic Code Mode.
- Forgetting the voice rules → output sounds like every other LinkedIn coach.
- Pitching the playbook every issue → readers tune out the bottom of the email.
- Generic openers ("In today's fast-paced business environment...") → corporate-speak fail.
- Skipping the operator story → loses the credibility moat.
- Closing every issue with a question → vary the rhythm.
- Suggesting GrapesJS or "the Builder" → newsletter is Custom HTML only.
- Pulling from blog content verbatim → newsletter must offer a fresh angle, not a summary.
