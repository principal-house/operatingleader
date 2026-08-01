# NEWSLETTER-STYLE.md — The Operating Note house style

Use this together with [NEWSLETTER.md](NEWSLETTER.md), [VOICE.md](VOICE.md), and the
latest sent issue sample. This file captures the current production style from Issue #005
so future drafts do not drift into a generic email template.

## Source sample

The house style is based on the Issue #005 HTML sample Jānis provided:

- Dark outer background `#111111`
- Inner card `#1a1a1a`
- Gold accent `#C9A84C`
- 600px max-width container
- Helvetica Neue / Helvetica / Arial for body and labels
- Georgia italic for the quote, artifact item bodies, and sign-off line

When the Notion Build & Send Guide is unavailable, recreate this style rather than
inventing a new layout.

## Layout rules

- Do **not** use a large article-style headline inside the email body.
- Start with the masthead row:
  - left: `THE OPERATING NOTE`
  - right: issue number, e.g. `#006`
- Follow with the read-time line:
  - `4-minute read &middot; Friday edition`
- Add a short gold rule under the read-time line.
- Use the standard section order from `NEWSLETTER.md`.
- Separate major body sections with thin `#2a2a2a` dividers.
- Keep body text compact:
  - body: 15px, line-height 1.7, color `#e8e8e8`
  - labels: 11px uppercase, gold, letter-spaced
  - mobile body: 16px, line-height 1.65
- Use a narrow, readable email width:
  - outer padding: 32px 16px
  - card max-width: 600px
  - desktop content padding: 48px left and right
  - mobile content padding: 22px left and right

## Copy rhythm

The newsletter should feel like a sharp operator note, not a blog post.

- Short paragraphs.
- Concrete opening scene.
- One idea only.
- Less explanation than a blog article.
- Stronger contrast between the default trap and what works.
- Avoid over-teaching. Leave a little edge.
- Use one crisp operator story to prove the point.
- Prefer lines like:
  - "Put it on the roadmap."
  - "Which sounds responsible, but usually means it disappears."
  - "That is the hidden cost. Not the tool. The human glue."

## Artifact card

The artifact is a saveable card, not a normal section.

Use:

- background `#212121`
- left border `3px solid #C9A84C`
- label: `THE ARTIFACT &middot; Save this`
- one italic description line
- five named items in uppercase gold
- each item body in Georgia italic
- small muted action nudge at the bottom

The artifact must work if screenshotted without the rest of the email.

## One line to steal

Use the quote style from Issue #005:

- label: `ONE LINE TO STEAL`
- body: Georgia italic, 19px desktop, white
- include quotation marks in the line

## Read more

Keep it modest and contextual:

- label is muted gray, not gold
- one sentence explaining why the article is relevant
- then the article link
- use `&rarr;` before the line break when natural

## PS card

The PS is its own card:

- background `#1f1f1f`
- label format: `PS &mdash; One question for you` or the relevant PS variant
- 14px body, line-height 1.65, color `#d4d4d4`
- keep it short
- for reply prompts, end with: `One line is plenty, I read every reply.`

## Sign-off and footer

Use the split sign-off style from Issue #005:

- `Systems set you free.` in Georgia italic gold
- `&mdash; JR` on the next line in Helvetica, 14px, semibold

Footer:

- `The Operating Note &middot; A bi-weekly note from operatingleader.com`
- include the operatingleader.com link
- include "You're getting this because you signed up at operatingleader.com."
- include unsubscribe and webview links

## Important punctuation note

`VOICE.md` bans em dashes and en dashes in body copy. The HTML template may contain
`&mdash;` only where the production template already uses it:

- PS label, e.g. `PS &mdash; One question for you`
- sign-off name line, `&mdash; JR`

Do not introduce dash punctuation into the newsletter body.

