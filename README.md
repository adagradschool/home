# Ada future-retro blog

Write Markdown posts in `content/posts`, then build a static site.

## Commands

```sh
npm install
npm run build
```

Preview locally:

```sh
npm run dev
```

## Writing a post

1. Create `content/posts/your-post.md`
2. Add front matter:

```md
---
title: Your title
date: 2025-01-17
description: Short summary.
---
```

3. Run `npm run build`

The output is in `dist/`.
