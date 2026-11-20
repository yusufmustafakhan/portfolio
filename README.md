# Yusuf Mustafa Khan — Portfolio

Personal portfolio for Yusuf Mustafa Khan, Technical Partner Alliance Manager at ALIANDO.
Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Update content

All content lives in the `data/` folder:

| File | What it controls |
|---|---|
| `data/profile.ts` | Name, title, summary, stats, social links, education |
| `data/experience.ts` | Career history |
| `data/projects.ts` | Projects and programs |
| `data/skills.ts` | Skill categories and levels |
| `data/certifications.ts` | Certifications and achievements |
| `data/blog.ts` | Blog articles |

## Assets

- Résumé: `public/resume/Yusuf_Mustafa_Khan_Resume.pdf`
- Profile photo: `public/images/profile/yusuf-profile.png` (then set `image` in `data/profile.ts`)

## Deploy

Push to GitHub and import the repository in Vercel. Every push to `main` redeploys automatically.
