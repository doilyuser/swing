# Swing

### A quiz app for NZ's 2023 election

This simple quiz is designed to help undecided and first time voters pick a party that aligns with their values.

## The Team

**Product Owner:** [Louis Dyer](https://github.com/doilyuser)

**Back-End Lead:** [Dylan Guthrie](https://github.com/dylan-guthrie-wickens)

**Front-End Lead:** [Humaidi 'Ado' Ridwan](https://github.com/humaidiar)

**Political Advisor:** [Allanah Lovelady](https://www.linkedin.com/in/allanah-lovelady-2a41b982/)

## Kanban

We are using [github issues](https://github.com/users/doilyuser/projects/2/views/1) to organise our progress.

## Wireframe

Check out our [figma file](https://www.figma.com/file/Ap0dsrGrX9mrzfgmbcYEE3/Swing?type=design&node-id=1%3A500&mode=design&t=l7MoB8IXXWMXAS0r-1) for wireframe and style guide.

## Getting Started

First, install packages with:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The entry point is `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter or Finger Paint, custom Google Fonts.

## User Stories

### To be continued...

### MVP:

As a user:

- [ ] Example of a uncompleted item
- [x] Example of a completed item

### Stretch:

As a user:

- [ ] Example of a uncompleted item
- [x] Example of a completed item

## Data

Users, cohorts, assessments, and modules are all part of MVP. Elements are stretch.

### questions.ts

```js
const questions = [
  {
    id: 1,
    englishQuestion: 'How are you?',
    englishOptions: {
      positive: 'Im good',
      neutral: 'Im average',
      negative: 'Im bad',
    },
    teReoQuestion: 'Kei te pēhea koe?',
    teReoOptions: {
      positive: 'Kei te pai',
      neutral: 'Kei te toharite',
      negative: 'Kei te kino',
    }, ...
  },
]
```

### dataStore.ts

```js
const initialDataState = {
  answers: [
    {answer: null, importance: 100 }, ...
  ],
  partyScores: [
    { partyName: 'Green', score: 0 },
    { partyName: 'National', score: 0 },
    { partyName: 'Labour', score: 0 },
    { partyName: 'TPM', score: 0 },
    { partyName: 'ACT', score: 0 },
    { partyName: 'TEST', score: 0 },
  ],
}
```

## Deployed on Vercel

Our app is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

View our current deployment at [swing-zeta.vercel.app](https://swing-zeta.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
