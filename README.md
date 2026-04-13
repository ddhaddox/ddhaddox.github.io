# Dawson Haddox — Academic Website

This is the source for [dawsonhaddox.com](https://dawsonhaddox.com), built with Jekyll and hosted on GitHub Pages.

---

## Site Structure & How to Edit

### Homepage (`_pages/about.md`)

The main page at `/` displays your About, Education, and Publications sections. Edit this file to update:
- Your bio and research focus
- Education history
- Links to your CV and social profiles

**Front matter:**
```
---
permalink: /
title: "About"
---
```

### Publications (`_publications/`)

Add your research papers here. Each publication gets its own page.

**Example entry:**
```
---
title: "Publication Title"
collection: publications
category: manuscripts
permalink: /publication/2024-my-paper
date: 2024-01-01
venue: 'Journal Name'
paperurl: 'https://doi.org/10.xxxx/xxxxx'
citation: 'Author et al. (2024). Title. <i>Journal</i>.'
---

Description of the publication...
```

See `_publications/_TEMPLATE.md` for the full template and optional fields.

**Display:** Publications are listed on the Publications section of the homepage and individually at their URLs.

### Talks (`_talks/`)

Add your talks, presentations, and conferences here.

**Example entry:**
```
---
title: "Talk Title"
collection: talks
category: talks
date: 2024-03-15
venue: "Conference Name"
location: "City, State"
---

Description of the talk...
```

See `_talks/_TEMPLATE.md` for the full template.

**Display:** Talks listed at `/talks/` (currently commented out in nav — uncomment in `_data/navigation.yml` to show).

**Bonus feature:** Once you have talks with location data, you can generate an interactive map. See `_tools/README.md` for instructions.

### Teaching (`_teaching/`)

Add your teaching experience and courses.

**Example entry:**
```
---
title: "Course Name"
collection: teaching
date: 2024-01-01
venue: "University Name"
location: "City, State"
---

Course description...
```

See `_teaching/_TEMPLATE.md` for the full template.

**Display:** Teaching listed at `/teaching/` (currently commented out in nav).

### Portfolio (`_portfolio/`)

Add your portfolio projects, software, or other creative work.

**Example entry:**
```
---
title: "Project Name"
excerpt: "Brief description."
collection: portfolio
image: /images/project-thumbnail.png
---

Project description, technologies used, links...
```

See `_portfolio/_TEMPLATE.md` for the full template.

**Display:** Portfolio listed at `/portfolio/` (currently commented out in nav).

### Blog Posts (`_posts/`)

Add blog posts with `YYYY-MM-DD-title.md` naming convention.

See `_posts/_TEMPLATE.md` for the template.

**Display:** Posts listed at `/year-archive/`, `/tags/`, `/categories/` (currently commented out in nav).

---

## Site Configuration (`_config.yml`)

Key settings to customize:

| Setting | Where | Purpose |
|---------|-------|---------|
| `title` | Line 12 | Site title (your name) |
| `description` | Line 15 | Site tagline / bio |
| `author.name`, `author.bio`, `author.location` | Lines 26-29 | Sidebar profile info |
| `author.email` | Line 32 | Contact email |
| `author.googlescholar` | Line 40 | Google Scholar profile URL |
| `author.bluesky`, `author.twitter` | Lines 56-57 | Social media links |

---

## Navigation (`_data/navigation.yml`)

Control which sections appear in the top nav menu. Currently active:
- About (homepage anchor)
- Education (homepage anchor)
- Publications (homepage anchor)
- CV (PDF link)

To enable Talks, Teaching, Portfolio, or Blog:
1. Open `_data/navigation.yml`
2. Uncomment the section you want to add
3. Run `jekyll serve` to preview

---

## CV

The CV is linked as a direct PDF download: `files/DawsonHaddoxCV_Feb2026.pdf`

To update:
1. Replace the PDF file in `files/` with your new CV
2. Keep the filename consistent, or update the link in `_data/navigation.yml` and `_pages/about.md`

---

## Images & Assets

- **Images:** Place images in `images/` and reference them with `/images/filename.png`
- **Files (PDFs, etc.):** Place in `files/` and reference with `/files/filename.pdf`
- **Profile photo:** Replace `images/profile.png` with your own (update filename in `_config.yml` if different)

---

## Running Locally

### Prerequisites

- Ruby and Bundler installed (see troubleshooting below)
- `bundle install` — installs Jekyll and dependencies

### Start dev server

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview changes. The site auto-rebuilds as you edit files.

### Troubleshooting: Bundler permissions

If you get a permission error, configure bundler to install locally:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### Using Docker

If you don't want to install Ruby locally:

```bash
docker compose up
```

Then visit `http://localhost:4000`.

### Using VS Code Dev Container

If you use VS Code, open the repository and select "Dev Container: Reopen in Container" (Cmd+Shift+P). Jekyll will auto-start.

---

## Deployment

The site auto-deploys to GitHub Pages whenever you push to `main`.

1. Commit your changes: `git add . && git commit -m "message"`
2. Push to GitHub: `git push`
3. GitHub Actions builds the site and deploys to `https://dawsonhaddox.com`

---

## Project Structure

```
.
├── _config.yml              # Site configuration
├── _data/
│   └── navigation.yml       # Top nav menu
├── _pages/
│   ├── about.md             # Homepage
│   ├── 404.md               # Error page
│   ├── publications.html     # Publications listing
│   ├── talks.html           # Talks listing
│   ├── teaching.html        # Teaching listing
│   └── portfolio.html       # Portfolio listing
├── _publications/           # Your papers
├── _talks/                  # Your talks
├── _teaching/               # Your teaching
├── _portfolio/              # Your projects
├── _posts/                  # Blog posts (optional)
├── assets/                  # CSS, JS, fonts
├── files/                   # PDFs, documents
├── images/                  # Images and photos
└── _tools/                  # Legacy scripts (talkmap)
```

---

## Tips

- **SEO:** Keep publication and talk metadata complete — `title`, `venue`, `date` appear in search results
- **Markdown:** All `.md` files support standard Markdown + Liquid templating (see Jekyll docs)
- **Front matter:** The YAML between `---` markers controls how pages appear and where they link
- **Collections:** Adding an entry to `_talks/`, `_teaching/`, etc. automatically creates a new page and adds it to the listing

---

## Questions or Issues?

Refer to:
- Jekyll docs: https://jekyllrb.com/docs/
- GitHub Pages: https://pages.github.com/
- The `_TEMPLATE.md` files in each collection folder for format examples
